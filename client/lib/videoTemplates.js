

Template.videosNewest.helpers({
    newestVideos: function () {
        return Videos.find({}, {sort: {createdAt: -1}, limit: 1});
    }
});

Template.videosPopular.helpers({
    popularVideos: function () {
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

