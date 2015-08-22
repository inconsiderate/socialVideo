if (Meteor.isClient) {

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

    Template.registerHelper('uploaderUsername', function () {
        return Meteor.users.findOne({_id: this.uploaderID}).profile.username;
    });

    Template.registerHelper('commenterUsername', function () {
        return Meteor.users.findOne({_id: this.commenterID}).profile.username;
    });
}