
//Meteor.publish("userData", function () {
//    return Meteor.users.find({_id: this.userId},
//        {fields: {'other': 1, 'things': 1}});
//});

Meteor.publish("publicUserData", function () {
    return Meteor.users.find({});
});

Videos._ensureIndex( { "$**": "text" } );

Meteor.methods({

    insertVideo: function (title, desc, url) {
        var userIP = this.connection.clientAddress;
        Videos.insert({
            title: title,
            path: url,
            description: desc,
            createdAt: new Date(),
            uploaderID: Meteor.userId(),
            comments: 0,
            likes: 0,
            uploadedFromIP: userIP
        });
    },
    deleteVideo: function (videoid) {
        Videos.remove({
            _id: videoid
        });
        VideoComments.remove({
            videoid: videoid
        });
        return 'video deleted';
    },

    addLikeToVideo: function (videoid, userid) {
        var video = Videos.findOne({_id: videoid});
        console.log(video);
        console.log(userid);
        Videos.update(videoid, {
            $inc: {likes: 1}
        });
        //TODO: add video to list of 'videos this user has liked'
    },

    insertVideoComment: function (videoid, content) {
        VideoComments.insert({
            videoid: videoid,
            content: content,
            createdAt: new Date(),
            commenterID: Meteor.userId()
        });
        Videos.update(videoid, {
            $inc: {comments: 1}
        })
    },

    deleteVideoComment: function (commentid) {
        var comment = VideoComments.findOne({_id: commentid});
        VideoComments.remove({
            _id: commentid
        });
        Videos.update(comment.videoid, {
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
