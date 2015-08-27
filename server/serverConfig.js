S3.config = {
    key: Meteor.settings.AWSAccessKeyId,
    secret: Meteor.settings.AWSSecretAccessKey,
    bucket: Meteor.settings.S3Bucket
};


Accounts.onCreateUser(function(options, user) {
    var options = {
        profile: {
            username: user._id
        }
    };

    if (options.profile) {
        user.profile = options.profile;
    }
    return user;
});
