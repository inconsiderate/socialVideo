
if (Meteor.isServer) {

    if (Meteor.users.find().count() < 3) {
        Meteor.users.remove({});

        var mike = Accounts.createUser({
            email: 'mike@gmail.com',
            password: 'password',
            profile: {
                username: 'mike',
                gender_identity: 'Male',
                age: '18',
                usermessages: 'true',
                emailnotifications: 'true',
                externalAvatarLink: 'https'
            }
        });
        var alice = Accounts.createUser({
            email: 'alice@gmail.com',
            password: 'password',
            profile: {
                username: 'alice',
                gender_identity: 'Female',
                age: '22',
                usermessages: 'false',
                emailnotifications: 'false',
                externalAvatarLink: 'https'
            }
        });
        var andrew = Accounts.createUser({
            email: 'andrew@gmail.com',
            password: 'password',
            profile: {
                username: 'andrew',
                gender_identity: 'Male',
                age: '27',
                usermessages: 'true',
                emailnotifications: 'false',
                externalAvatarLink: 'https'
            }
        });
    }

    if ((Videos.find().count() < 12) && (Meteor.users.find().count() == 3)) {

        Videos.remove({});
        UserProfileComments.remove({});

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 1',
            description: 'This is our sample video and a longer sample description because sometimes people like to type a lot of really stupid shit that no one cares about. Yup.',
            createdAt: new Date(),
            uploaderID: mike,
            likes: Math.floor((Math.random() * 100) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 2',
            description: 'something more aweomse',
            createdAt: new Date(),
            uploaderID: alice,
            likes: Math.floor((Math.random() * 100) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 3',
            description: 'This is video number three.',
            createdAt: new Date(),
            uploaderID: andrew,
            likes: Math.floor((Math.random() * 100) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 4',
            description: 'im a pinball wizard or something. boobs.',
            createdAt: new Date(),
            uploaderID: mike,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 5',
            description: 'another random video.',
            createdAt: new Date(),
            uploaderID: alice,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 6',
            description: 'Is this a generic message? Yes. It probably is. But I only have to write it once.',
            createdAt: new Date(),
            uploaderID: andrew,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 7',
            description: 'boobs. that is all.',
            createdAt: new Date(),
            uploaderID: mike,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 8',
            description: 'oh hi this is my video',
            createdAt: new Date(),
            uploaderID: alice,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 9',
            description: 'im a pinball wizard or something. boobs.',
            createdAt: new Date(),
            uploaderID: andrew,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 10',
            description: 'What is going on in this video? This isnt even lego, its some sort of kinex thing or something. Right? Its something like that. I dont even actually know to be honest. Its freaking me out. And is that a hand? Is that a child!? What the hell even.',
            createdAt: new Date(),
            uploaderID: mike,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 11',
            description: 'boobs.',
            createdAt: new Date(),
            uploaderID: alice,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });

        Videos.insert({
            path: 'http://s3.amazonaws.com/daddyissues/testvideos/testvideo01.mp4',
            title: 'Test Video 12',
            description: 'im a pinball wizard or something. boobs.',
            createdAt: new Date(),
            uploaderID: andrew,
            likes: Math.floor((Math.random() * 10) + 1),
            comments: 0
        });
    }

    if (VideoComments.find().count() < 9 && (Meteor.users.find().count() == 3) && (Videos.find().count() == 12)) {
        VideoComments.remove({});

        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 1'})._id,
            content: 'This is an example of a video comment!',
            createdAt: new Date(),
            commenterID: alice
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 2'})._id,
            content: 'This is an example of a video comment!',
            createdAt: new Date(),
            commenterID: andrew
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 3'})._id,
            content: 'This is an example of a video comment!',
            createdAt: new Date(),
            commenterID: mike
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 4'})._id,
            content: 'This is the first comment on this video',
            createdAt: new Date(),
            commenterID: alice
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 4'})._id,
            content: 'This is the second comment on this video!',
            createdAt: new Date(),
            commenterID: andrew
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 4'})._id,
            content: 'This is the third comment on this video!',
            createdAt: new Date(),
            commenterID: mike
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 4'})._id,
            content: 'This is the fourth comment on this video',
            createdAt: new Date(),
            commenterID: alice
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 4'})._id,
            content: 'MOAR COMMENTS',
            createdAt: new Date(),
            commenterID: alice
        });
        VideoComments.insert({
            videoid: Videos.findOne({title: 'Test Video 4'})._id,
            content: "This is a MAX CHARACTERS comment. It uses the maximum amount of allowed character. Four hundred! That's a lot. Like, seven more than three hundred and three. Yup. That's math. We're good at math over here. This fixture is long and boring to type out.... Maybe I'll just copy and paste something. This fixture is long and boring to type out.... Maybe I'll just copy and paste something. This fixture..",
            createdAt: new Date(),
            commenterID: alice
        });
    }
}