if (Meteor.isClient) {

    $(document).ready(function () {
        $('ul.tabs').tabs();
        $(".button-collapse").sideNav();
    });

    Template.userVideos.helpers({
        myVideos: function () {
            return Videos.find({
                username: Meteor.user().username
            });
        }
    });

    Template.singleVideo.events({
        "click .card-image": function () {
            $('#videoSingleModal').openModal();
        }
    });

    Template.navbar.events({
        "click .login-modal": function () {
            $('#user-account-modal').openModal();
            $('ul.tabs').tabs();
            $('.dropdown-button').dropdown({
                    inDuration: 800,
                    outDuration: 225,
                    constrain_width: false, // Does not change width of dropdown to that of the activator
                    hover: true, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: true // Displays dropdown below the button
                }
            );
        }
    });

}
