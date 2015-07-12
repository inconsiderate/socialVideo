Router.configure(
    {
        loadingTemplate: 'loading',
        layoutTemplate: 'mainLayout',
        onBeforeAction: 'loading',
        //onAfterAction: function () {
        //    $('ul.tabs').tabs();
        //    $('input#video_title, textarea#video_description').characterCounter();
        //    $(".button-collapse").sideNav();
        //    $('#user-account-modal').closeModal();
        //    videojs("example_video_1", {}, function(){
        //        // Player (this) is initialized and ready.
        //    });
        //}
    });

Router.route('/', function () {
    this.render('splashPage', {to: 'mainContent'});
    this.render('navbar2', {to: 'mainContent'});
});

Router.route('/users/:_id', {
    data: function () {
        return Meteor.users.findOne({username: this.params._id});
    },
    action: function () {
        this.render('userLanding', {to: 'mainContent'});
    }
});

Router.route('/search/:_id1/:_id2', {
    data: function () {
        return Videos.find({
            $text: {$search: this.params._id1}
        })
    },
    action: function() {
        this.render('searchNavbar', {to: 'mainContent'})
    }
});

Router.route('/videos/:_id', {
    data: function () {
        return Videos.findOne({_id: this.params._id});
    },
    action: function () {
        this.render('videoLanding', {to: 'mainContent'})
    }
});

Router.route('/aboutus', function () {
    this.render('aboutus', {to: 'mainContent'});
});

Router.route('/legal', function () {
    this.render('legal', {to: 'mainContent'});
});