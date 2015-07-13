if (Meteor.isClient) {

    Template.body.events({
        "click a": function() {
            $('.video-js').bind('contextmenu',function() { return false; });
            $('ul.tabs').tabs();
        }
    });

    Template.userVideos.helpers({
        myVideos: function () {
            return Videos.find({username: Meteor.user().username});
        }
    });

    Template.userProfile.helpers({
        myComments: function() {
            // TODO: return all user comments
        }
    });

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
            videojs(document.getElementsByClassName('video-js')[0], {}, function() {
            });
        }
    });
}
