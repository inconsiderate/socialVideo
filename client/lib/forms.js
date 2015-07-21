Template.searchForm.events({
    "submit .search-field-form": function (event) {
        var searchFilter = event.target.searchField.value;
        //TODO: Create a route here for search results
        event.target.searchField.value = "";
        event.preventDefault();
        return false;
    }
});

Template.editUserProfile.events({
    "submit .edit-user-form": function (event) {
        //TODO: allow users to change username and other profile settings form the user landing page.
    }
});

Template.submitNewVideo.helpers({
    "files": function () {
        return S3.collection.find();
    }
});

Template.submitNewVideo.events({
    "submit .submit-video-form": function (event) {
        var files = $("#file_bucket")[0].files;
        var title = event.target.video_title.value;
        var desc = event.target.video_description.value;

        S3.upload({
            files: files,
            //TODO: Let's also upload an image or gif, created from frames of the video, once we are converting our own stuff
            path: "testvideos"
        }, function (e, r) {
            if (e != null) {
                Materialize.toast('Upload failed for some reason. Please try again.', 6000);
                Materialize.toast(e, 6000);
            } else if (r.percent_uploaded == 100) {
                Materialize.toast('Upload Successful!', 6000);
                Meteor.call('insertVideo', title, desc, r.url);
            }
        });
        event.target.video_title.value = "";
        event.target.video_description.value = "";
        $('input[type="checkbox"]').removeAttr('checked');
        $("#file_bucket").val("");
        $('.video-js').bind('contextmenu',function() { return false; });
        event.preventDefault();
        return false;
    }
});

Template.deleteVideo.events({
    "submit .delete-video-form": function (event) {
        var videoid = event.target.videoid.value;


        //S3.upload({
        //    files: files,
        //    path: "testvideos"
        //}, function (e, r) {
        //    if (e != null) {
        //        Materialize.toast('Upload failed for some reason. Please try again.', 4000);
        //        Materialize.toast(e, 6000);
        //    } else if (r.percent_uploaded == 100) {
                Materialize.toast('Video Deleted!', 6000);
                Meteor.call('insertVideo', title, desc, r.url);
        //    }
        //});
        event.target.video_title.value = "";
        event.preventDefault();
        return false;
    }
});

Template.newCommentModal.events({
    "submit .submit-video-comment": function (event) {
        var content = event.target.content.value;
        var videoid = event.target.videoid.value;
        Meteor.call('insertVideoComment', videoid, content);
        event.target.content.value = "";
        $('.modal').closeModal();
        event.preventDefault();
        return false;
    }
});

//Template.deleteComment.events({
//    "submit .delete-video-comment": function (event) {
//        var commentid = event.target.content.value;
//        console.log(commendid);
//        Meteor.call('deleteVideoComment', commentid);
//        event.target.content.value = "";
//        return false;
//    }
//});


