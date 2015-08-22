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
        var username = event.target.user_name.value,
            gender = event.target.user_gender.value,
            age = event.target.user_age.value,
            single = event.target.user_relationship.value,
            usermessages = event.target.user_messages_toggle.value,
            emailnotifications = event.target.email_notifications_toggle.value;

        Meteor.users.update({_id:Meteor.user()._id}, {
            $set: {
                "profile.username": username,
                "profile.gender": gender,
                "profile.age": age,
                "profile.usermessages": usermessages,
                "profile.emailnotifications": emailnotifications,
                "profile.single": single
            }
        });
    }
});

Template.submitNewVideo.helpers({
    "files": function () {
        return S3.collection.find();
    }
});

Template.submitNewVideo.events({
    "submit .submit-video-form": function (event) {
        var files = $("#file_bucket")[0].files,
        title = event.target.video_title.value,
        desc = event.target.video_description.value;

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
        $('.video-js').bind('contextmenu', function () {
            return false;
        });
        event.preventDefault();
        return false;
    }
});

Template.smallVideoCard.events({
    "submit .delete-video-form": function (event) {
        var videoid = event.target.videoid.value,
            thisVideo = Videos.findOne({_id: videoid}),
            url = "/"+Meteor.settings.S3Bucket+"/" + thisVideo.path.toString().split("/")[5];

        if (thisVideo.owner == Meteor.userId()) {
            S3.delete(url, function (err, res) {
                if (err != null) {
                    Meteor.call('deleteVideo', videoid, function (err, data) {
                        if (err != null) {
                            console.log(data);
                            Materialize.toast("Video deleted!", 4000);
                        } else {
                            Materialize.toast('Your video was deleted from our server, but the link was not removed from the local host. The video is actually gone, and the problem is being investigated.', 6000);
                        }
                    });
                } else {
                    Materialize.toast("There was a problem deleting your video. Please try again.", 4000);
                }
            });
        } else {
            Materialize.toast("You don't have permission to delete this file. How did you get in here, anyway?", 6000);
        }
        event.target.videoid.value = "";
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
        $('#newCommentModal').closeModal();
        return false;
    }
});

Template.singleComment.events({
    "submit .delete-comment-form": function (event) {
        var commentid = event.target.commentid.value;
        Meteor.call('deleteVideoComment', commentid);
        event.preventDefault();
        return false;
    }
});


