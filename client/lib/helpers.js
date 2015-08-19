if (Meteor.isClient) {

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

    Template.body.helpers({
        uploaderUsername: function() {
            return Meteor.users.findOne({_id: this.uploaderID}).profile.username;
        }
    });
}