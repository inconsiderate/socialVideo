

Template.videosNewest.helpers({
    newestVideo: function () {
        return Videos.findOne({}, {sort: {createdAt: -1}});
    }
});

Template.videosPopular.helpers({
    popularVideos: function () {
        //TODO: change this to VIEWS
        return Videos.find({}, {sort: {likes: -1}, limit: 20});
    }
});

Template.videosRated.helpers({
    ratedVideos: function () {
        return Videos.find({}, {sort: {likes: 1}, limit: 20});
    }
});

Template.videosRandom.helpers({
    randomVideo: function () {
        return Videos.find({}, {sort: {keywords: 1}, limit: 1});
    }
});

Template.videoLanding.helpers({
    allComments: function() {
        return VideoComments.find({videoid: this._id}, {sort: {creatvedAt: -1}});
    }
});

Template.videoLanding.events({
    "click .addLikeButton": function(event){
        console.log(Meteor.user().username);
        console.log(this._id);
        // add this video to the list of "liked" videos tied to user_id
    }
});

Template.videoLanding.events({
    "click .createComment": function(){
        $('#newCommentModal').openModal();
    }
});

