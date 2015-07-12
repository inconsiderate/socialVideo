Router.configure(
    {
        loadingTemplate: 'loading',
        layoutTemplate: 'mainLayout',
        subscriptions: function () {
            this.subscribe('videos');
        },
        onAfterAction: function () {
            $('ul.tabs').tabs();
            $(".button-collapse").sideNav();
        }
    });

Router.onBeforeAction('loading');

Router.route('/', function () {
    this.render('splashPage', {to: 'mainContent'});
    this.render('navbar2', {to: 'navbar2'});

});

Router.route('/videos/latest', {

    name: 'videos.latest',

    yieldRegions: {
        'navbar2': {to: 'navbar2'}
    },
    data: function () {
        return Videos.find()
    },
    action: function () {
        this.render('singleVideo', {to: 'mainContent'});
    }
});

Router.route('/videos/newest', function () {
    this.render('singleVideo', {to: 'mainContent'});
    this.render('navbar2', {to: 'navbar2'});
});

Router.route('/videos/popular', function () {
    this.render('videos', {to: 'mainContent'});
    this.render('navbar2', {to: 'navbar2'});
});


Router.route('/videos/rated', function () {
    this.render('mainVideoList', {to: 'mainContent'});
    this.render('navbar2', {to: 'navbar2'});
});


Router.route('/videos/random', function () {
    this.render('splashPage', {to: 'mainContent'});
    this.render('navbar2', {to: 'navbar2'});
});

Router.route('/user/:_id', function () {
    this.render('userLanding', {to: 'mainContent'}, {
        data: function () {
            return Meteor.users;
        }
    });
});

Router.route('/videos/:_id', function () {
    this.render('videoLanding', {to: 'mainContent'}, {})
});
