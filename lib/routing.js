Router.route('/', function () {
    this.layout('mainLayout');
    this.render('videos', {to: 'mainContent'});
});

Router.route('/subnav1', function () {
    this.layout('mainLayout');
    this.render('singleVideo', {to: 'mainContent'});
});


Router.route('/subnav2', function () {
    this.layout('mainLayout');
    this.render('videos', {to: 'mainContent'});
});


Router.route('/subnav3', function () {
    this.layout('mainLayout');
    this.render('searchForm', {to: 'mainContent'});
});


Router.route('/subnav4', function () {
    this.layout('mainLayout');
    this.render('singleVideo', {to: 'mainContent'});
});

Router.route('/user/:_id', function () {
    this.layout('mainLayout');
    this.render('userLanding', {to: 'mainContent'}, {
        data: function () {
            return Meteor.users;
        }
    });
});

Router.map(function() {
    this.route('oneVideo', {
        path: '/video/:_id',
        layout: 'mainLayout',
        template: 'videoLanding', // <-- to be explicit
        data: function() {
            return Videos.findOne(this.params._id);
        }
    });
});
//
//Router.route('/video/:_id', function () {
//    this.layout('mainLayout');
//    this.render('videoLanding',  {
//
//        data: function () {
//            return Videos.findOne({_id: this.params._id});
//        }
//    });
//});
