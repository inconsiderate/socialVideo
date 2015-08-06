

if (Meteor.isServer && Videos.find().count() < 50) {
    Videos.remove({});
    VideoComments.remove({});
    UserProfileComments.remove({});


    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 1',
        description: 'This is our sample video and a longer sample description because sometimes people like to type a lot of really stupid shit that no one cares about. Yup.',
        createdAt: new Date(),
        username: 'andrew',
        likes: Math.floor((Math.random() * 100) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 2',
        description: 'something more aweomse',
        createdAt: new Date(),
        username: 'tom',
        likes: Math.floor((Math.random() * 100) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 3',
        description: 'This is video number three.',
        createdAt: new Date(),
        username: 'mike',
        likes: Math.floor((Math.random() * 100) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 4',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 5',
        description: 'another random video.',
        createdAt: new Date(),
        username: 'alice',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 6',
        description: 'Is this a generic message? Yes. It probably is. But I only have to write it once.',
        createdAt: new Date(),
        username: 'new maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 7',
        description: 'boobs. that is all.',
        createdAt: new Date(),
        username: 'old maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 8',
        description: 'oh hi this is my video',
        createdAt: new Date(),
        username: 'natasha',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 9',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'old maggie',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 10',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'mike',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 11',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'tom',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });

    Videos.insert({
        path: 'http://s3.amazonaws.com/daddyissues/testvideos/df021166-e36d-424a-b4d5-4500352dd046.mp4',
        title: 'Test Video 12',
        description: 'im a pinball wizard or something. boobs.',
        createdAt: new Date(),
        username: 'andrew',
        likes: Math.floor((Math.random() * 10) + 1),
        comments: 0
    });
}