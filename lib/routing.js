Router.configure(
    {
        loadingTemplate: 'loading',
        layoutTemplate: 'mainLayout',

        onAfterAction: function () {
            setTimeout(function(){
                var currentWidth = ($(window).width()*0.75);
                $('.modal').closeModal();
                $('.video-js').bind('contextmenu',function() { return false; });
                $('ul.tabs').tabs();
                $('.button-collapse').sideNav({
                        menuWidth: currentWidth,
                        closeOnClick: true
                    }
                );
            });
        }
    });

Router.route('/', {
    action: function() {
        this.render('navbar2', {to: 'mainContent'});
    }
});

Router.route('/users/:_id', {
    data: function () {
        return Meteor.users.findOne({_id: this.params._id});
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
    action: function () {
        this.render('searchNavbar', {to: 'mainContent'})
    }
});

Router.route('/videos/:_id', {
    data: function () {
        return Videos.findOne({_id: this.params._id});
    },
    action: function () {
        this.render('videoLanding', {to: 'mainContent'})
    },
    onAfterAction: function () {
        var element = "#"+this.params._id;
        setTimeout(function(){
            $(element).on('loadstart', function (event) {
                $(element).addClass('loading')
            });
            $(element).on('canplay', function (event) {
                $(element).removeClass('loading');
                $(element).addClass('loaded')
            })
        });
    }
});

Router.route('/aboutus', function () {
    this.render('aboutus', {to: 'mainContent'});
});

Router.route('/legal', function () {
    this.render('legal', {to: 'mainContent'});
});

Router.route('/privacy', function () {
    this.render('privacy', {to: 'mainContent'});
});

Router.route('/terms', function () {
    this.render('terms', {to: 'mainContent'});
});

Router.route('/admin', {where: 'server'})
    .get(function () {
        this.response.end('admin');
    });
