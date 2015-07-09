
Router.route('/home', function () {
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


