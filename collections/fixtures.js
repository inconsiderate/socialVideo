
if (Meteor.isServer) {

    if (Meteor.users.find().count() < 3) {
        Meteor.users.remove({});

        Accounts.createUser({
            username: 'mike',
            email: 'mike@gmail.com',
            password: 'password',
            profile: {
                username: 'Mike',
                gender_identity: 'Male',
                age: '18',
                usermessages: 'true',
                emailnotifications: 'true',
                externalAvatarLink: 'https'
            }
        });
        Accounts.createUser({
            username: 'alice',
            email: 'alice@gmail.com',
            password: 'password',
            profile: {
                username: 'Alice',
                gender_identity: 'Female',
                age: '22',
                usermessages: 'false',
                emailnotifications: 'false',
                externalAvatarLink: 'https'
            }
        });
        Accounts.createUser({
            username: 'andrew',
            email: 'andrew@gmail.com',
            password: 'password',
            profile: {
                username: 'Andrew',
                gender_identity: 'Male',
                age: '27',
                usermessages: 'true',
                emailnotifications: 'false',
                externalAvatarLink: 'https'
            }
        });
    }

    if (Videos.find().count() < 12) {

        Videos.remove({});
        UserProfileComments.remove({});

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 1',
            description: 'This is our sample video and a longer sample description because sometimes people like to type a lot of really stupid shit that no one cares about. Yup.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'mike'})._id,
            likes: Math.floor((Math.random() * 100) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 2',
            description: 'something more aweomse',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'alice'})._id,
            likes: Math.floor((Math.random() * 100) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 3',
            description: 'This is video number three.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'andrew'})._id,
            likes: Math.floor((Math.random() * 100) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 4',
            description: 'im a pinball wizard or something. boobs.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'mike'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 5',
            description: 'another random video.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'alice'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 6',
            description: 'Is this a generic message? Yes. It probably is. But I only have to write it once.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'andrew'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 7',
            description: 'boobs. that is all.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'mike'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 8',
            description: 'oh hi this is my video',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'alice'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 9',
            description: 'im a pinball wizard or something. boobs.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'andrew'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 10',
            description: 'What is going on in this video? This isnt even lego, its some sort of kinex thing or something. Right? Its something like that. I dont even actually know to be honest. Its freaking me out. And is that a hand? Is that a child!? What the hell even.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'mike'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 11',
            description: 'boobs.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'alice'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 12',
            description: 'im a pinball wizard or something. boobs.',
            createdAt: new Date(),
            uploaderID: Meteor.users.findOne({username: 'andrew'})._id,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });
    }

    if (VideoComments.find().count() < 2) {
        VideoComments.remove({});

        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 1'})._id,
            content: 'This is an example of a video comment!',
            createdAt: new Date(),
            commenterID: Meteor.users.findOne({username: 'alice'})._id
        });
    }
}