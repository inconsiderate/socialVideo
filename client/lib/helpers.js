if (Meteor.isClient) {

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

    Template.registerHelper('uploaderUsername', function () {
        var user = Meteor.users.findOne({_id: this.uploaderID});
        return user.profile.username;
    });

    Template.registerHelper('commenterUsername', function () {
        var user = Meteor.users.findOne({_id: this.commenterID});
        return user.profile.username;
    });
}