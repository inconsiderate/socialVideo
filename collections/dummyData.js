
var N = 1;

if (Meteor.isServer && Videos.find().count() < N) {
    Videos.remove({});

    for (i = 0; i < N; i++) {
        Videos.insert({
            path: 'videos/mpegsample.mp4',
            title: 'Weird Mpeg Sample Video',
            keywords: 'sample test lego sfw',
            description: 'This is our sample video and a longer sample description because sometimes people like to type a lot.',
            createdAt: new Date(),
            username: 'andrew',
            likes: Math.floor((Math.random() * 1000) + 1)
        });
    }
    for (i = 0; i < N; i++) {
        Videos.insert({
            path: 'videos/mpegsample.mp4',
            title: 'something something something',
            keywords: 'thai twogirls',
            description: 'something more aweomse',
            createdAt: new Date(),
            username: 'tom',
            likes: Math.floor((Math.random() * 1000) + 1)
        });
    }
    for (i = 0; i < N; i++) {
        Videos.insert({
            path: 'videos/mpegsample.mp4',
            title: 'this is the fourth video!',
            keywords: 'video sexy fourth',
            description: 'This is video number four.',
            createdAt: new Date(),
            username: 'mike',
            likes: Math.floor((Math.random() * 1000) + 1)
        });
    }
    for (i = 0; i < N; i++) {
        Videos.insert({
            path: 'videos/mpegsample.mp4',
            title: 'this is lego',
            keywords: 'lego',
            description: 'im a pinball wizard or something. boobs.',
            createdAt: new Date(),
            username: 'maggie',
            likes: Math.floor((Math.random() * 1000) + 1)
        });
    }


    VideoComments.remove({});

    UserProfileComments.remove({});
    //TODO: create dummy user profile comments
}