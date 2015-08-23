

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
        return VideoComments.find({videoid: this._id}, {sort: {createdAt: -1}});
    }
});

Template.videoLanding.events({
    "click .likeButton": function(event){
        Meteor.call('likeVideoButton', this._id, Meteor.user().profile.username);
    },
    "click .login-modal": function () {
        $('#user-account-modal').openModal();
        $('#user-navbar').tabs();
    },
    "click .createComment": function(){
        $('#newCommentModal').openModal();
    }
});

