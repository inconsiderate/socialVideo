if (Meteor.isClient) {

    Template.userVideos.helpers({
        myVideos: function () {
            return Videos.find({
                username: Meteor.user().username
            });
        }
    });

    //Template.videoLanding.helpers({
    //    singleVideo: function () {
    //        return Videos.findOne({
    //            _id:
    //        });
    //    }
    //});

    //Template.singleVideo.events({
    //    "click .card-image": function () {
    //        $('#videoSingleModal').openModal();
    //    }
    //});
    //

    Template.navbar.events({
        "click .login-modal": function () {
            $('.video-js').bind('contextmenu',function() { return false; });
            $('#user-account-modal').openModal();
            $('ul.tabs').tabs();
            $('input#video_title, input#video_description').characterCounter();
            $('.dropdown-button').dropdown({
                    inDuration: 800,
                    outDuration: 225,
                    constrain_width: false, // Does not change width of dropdown to that of the activator
                    hover: true, // Activate on hover
                    gutter: 5, // Spacing from edge
                    belowOrigin: true //
                }
            );
        }
    });
}
