Router.configure(
    {
        loadingTemplate: 'loading',
        layoutTemplate: 'mainLayout',
        onBeforeAction: 'loading',
        onAfterAction: function () {
            $('ul.tabs').tabs();
            $(".button-collapse").sideNav();
            $('#user-account-modal').closeModal();
        }
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

Router.route('/videos/:_id', {
    data: function () {
        return Videos.findOne({_id: this.params._id});
    },
    action: function () {
        this.render('videoLanding', {to: 'mainContent'}, {})
    }
});

Router.route('/aboutus', function () {
    this.render('aboutus', {to: 'mainContent'});
});

Router.route('/legal', function () {
    this.render('legal', {to: 'mainContent'});
});