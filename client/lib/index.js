if (Meteor.isClient) {

    Template.navbar.events({
        "click .login-modal": function () {
            $('.video-js').bind('contextmenu',function() { return false; });
            $('#user-navbar').tabs();
            $('.collapsible').collapsible();
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
            $('#user-account-modal').openModal();
        }
    });
}
