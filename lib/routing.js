Router.configure(
    {
        loadingTemplate: 'loading',
        layoutTemplate: 'mainLayout',

        onAfterAction: function () {
            setTimeout(function(){
                $('.modal').closeModal();
                $('.video-js').bind('contextmenu',function() { return false; });
                $('ul.tabs').tabs();
            });
        }
    });

Router.route('/', {
    action: function() {
        this.render('navbar2', {to: 'mainContent'});
    }
});

Router.route('/users/:username', {
    data: function () {
        return Meteor.users.findOne({username: this.params.username});
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
    }
});

Router.route('/aboutus', function () {
    this.render('aboutus', {to: 'mainContent'});

});

Router.route('/legal', function () {
    this.render('legal', {to: 'mainContent'});
});