if (Meteor.isClient) {

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

}