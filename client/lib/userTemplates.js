if (Meteor.isClient) {

    Template.userLanding.helpers({
        myVideos: function () {
            return Videos.find({uploaderID: this._id});
        }
    });

    Template.userVideos.helpers({
        myVideos: function () {
            return Videos.find({uploaderID: Meteor.user().profile.username});
        }
    });

    Template.userProfile.helpers({
        myComments: function () {
            return VideoComments.find({userID: this._id});
        }
    });
}