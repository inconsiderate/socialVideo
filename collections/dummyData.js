

if (Meteor.isServer && Videos.find().count() < 12) {
    Videos.remove({});
    VideoComments.remove({});
    UserProfileComments.remove({});


    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video1.mp4',
        title: 'Test Video 1',
        description: 'This is our sample video and a longer sample description because sometimes people like to type a lot of really stupid shit that no one cares about. Yup.',
        createdAt: new Date(),
        username: 'andrew',
        likes: Math.floor((Math.random() * 100) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video2.mp4',
        title: 'Test Video 2',
        description: 'something more aweomse',
        createdAt: new Date(),
        username: 'tom',
        likes: Math.floor((Math.random() * 100) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video3.mp4',
        title: 'Test Video 3',
        description: 'This is video number three.',
        createdAt: new Date(),
        username: 'mike',
        likes: Math.floor((Math.random() * 100) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video4.mp4',
        title: 'Test Video 4',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video5.mp4',
        title: 'Test Video 5',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video6.mp4',
        title: 'Test Video 6',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video7.mp4',
        title: 'Test Video 7',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video8.mp4',
        title: 'Test Video 8',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video9.mp4',
        title: 'Test Video 9',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video10.mp4',
        title: 'Test Video 10',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video11.mp4',
        title: 'Test Video 11',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/video12.mp4',
        title: 'Test Video 12',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });
}