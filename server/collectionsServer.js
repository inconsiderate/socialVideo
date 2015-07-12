
Videos._ensureIndex( { "$**": "text" } );

Meteor.methods({
    insertVideo: function (title, desc) {
        Videos.insert({
            title: title,
            //path: url,
            //keywords: keywords,
            description: desc,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    }
});

Meteor.publish('videos-latest', function() {
    return Videos.find({}, {sort: {createdAt: -1}, limit: 20});
});

Meteor.publish('videos-current-user', function() {
    return Videos.find({username: this.userId}, {sort: {createdAt: -1}, limit: 10});
});

Meteor.publish('videos-by-user', function(user) {
    return Videos.find({_id: user._id}, {sort: {createdAt: -1}, limit: 10});
});

//Meteor.publish("userData", function () {
//    return Meteor.users.find({_id: this.userId},
//        {fields: {'other': 1, 'things': 1}});
//});

Meteor.publish("publicUserData", function () {
    return Meteor.users.find({}, {fields: {
        'username': 1
    }});
});
