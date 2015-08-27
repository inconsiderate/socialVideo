if (Meteor.isClient) {

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

    Template.registerHelper('uploaderUsername', function () {
        var u = Meteor.users.findOne({_id: this.uploaderID});
        return u.profile.username;
    });

    Template.registerHelper('commenterUsername', function () {
        var u = Meteor.users.findOne({_id: this.commenterID});
        console.log(u);
        return u.profile.username;
    });
}