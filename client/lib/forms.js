Template.searchForm.events({
    "submit .search-field-form": function (event) {
        var searchFilter = event.target.searchField.value;
        //Pages.set({
        //    filters: {
        //        $text: {$search: searchFilter}
        //    }
        //});
        event.target.searchField.value = "";
        event.preventDefault();
        return false;
    }
});

Template.submitNewVideo.helpers({
    "files": function () {
        return S3.collection.find();
    }
});

Template.submitNewVideo.events({
    "submit .submit-video-form": function (event) {
        var files = $("input[type='file']")[0].files;
        var title = event.target.video_title.value;
        var desc = event.target.video_description.value;
        var keywords = [];
        var checkboxes = {
            straight: event.target.keyword1.checked,
            gay: event.target.keyword2.checked,
            lesbian: event.target.keyword3.checked,
            teen: event.target.keyword4.checked,
            amateur: event.target.keyword5.checked,
            reality: event.target.keyword6.checked,
            group: event.target.keyword7.checked,
            mature: event.target.keyword8.checked
        };
        S3.upload({
            files: files,
            //TODO: Let's also upload an image or gif, once we are converting our own stuff
            path: "testvideos"
        }, function (e, r) {
            if (e != null) {
                Materialize.toast('Upload failed for some reason.', 4000);
                Materialize.toast(e, 4000);
            } else if (r.percent_uploaded == 100) {
                Materialize.toast('Upload Successful!', 4000);
                Meteor.call('insertVideo', title, desc, r.url);
            }
        });
        event.target.video_title.value = "";
        event.target.video_description.value = "";
        $('input[type="checkbox"]').removeAttr('checked');
        $("#file_bucket").val("");
        event.preventDefault();
        return false;
    }
});

Template.newCommentModal.events({
    "submit .submit-video-comment": function (event) {
        var content = event.target.content.value;
        var videoid = event.target.videoid.value;
        console.log(content, videoid);
        Meteor.call('insertVideoComment', videoid, content);

        event.target.content.value = "";
        $('#newCommentModal').closeModal();
        event.preventDefault();
        return false;
    }
});