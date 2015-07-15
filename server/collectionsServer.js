
//Meteor.publish("userData", function () {
//    return Meteor.users.find({_id: this.userId},
//        {fields: {'other': 1, 'things': 1}});
//});

Meteor.publish("publicUserData", function () {
    return Meteor.users.find({}, {fields: {
        'username': 1
    }});
});

Videos._ensureIndex( { "$**": "text" } );

Meteor.methods({
    insertVideo: function (title, desc, url) {
        Videos.insert({
            title: title,
            path: url,
            //keywords: keywords,
            description: desc,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            comments: 0,
            likes: 0
        });
    },
    deleteVideo: function (videoid) {
        //TODO: check that user owns this video
        Videos.remove({
            _id: videoid
        });
        VideoComments.remove({
            videoid: videoid
        });
    },

    insertVideoComment: function (videoid, content) {
        VideoComments.insert({
            videoid: videoid,
            content: content,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
        Videos.update(videoid, {
            $inc: {comments: 1}
        })
    },

    deleteVideoComment: function (videoid, commentid) {
        //TODO: check that user owns this comment
        VideoComments.remove({
            _id: commentid
        });
        Videos.update(videoid, {
            $inc: {comments: -1}
        })
    }
});

Meteor.publish('videos-latest', function() {
    return Videos.find({}, {sort: {createdAt: -1}, limit: 20});
});

Meteor.publish('videos-current-user', function() {
    return Videos.find({username: this.userId}, {sort: {createdAt: -1}, limit: 10});
});

Meteor.publish('comments', function() {
    return VideoComments.find();
});

//Meteor.publish('video-comments-for-one-user', function(user) {
//    return VideoComments.find({username: user}, {sort: {createdAt: -1}});
//});
