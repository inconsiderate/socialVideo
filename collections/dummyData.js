//
//var N = 10;
//
//if (Meteor.isServer && Videos.find().count() < N) {
//    Videos.remove({});
//
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/mpegsample.mp4',
//            title: 'Weird Mpeg Sample Video',
//            keywords: 'sample test lego sfw',
//            description: 'This is our sample video and a longer sample description because sometimes people like to type a lot.',
//            createdAt: new Date(),
//            username: 'andrew',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/mpegsample.mp4',
//            title: 'Two Thai Girls Suck Some Dick',
//            keywords: 'thai twogirls blowjob',
//            description: 'two thai girls blowjobing',
//            createdAt: new Date(),
//            username: 'tom',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/mpegsample.mp4',
//            title: 'two girls and one dude fuck',
//            keywords: 'twogirls one guy threesome amateur homemade',
//            description: 'Threesome video its pretty cool or whatever',
//            createdAt: new Date(),
//            username: 'mike',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/mpegsample.mp4',
//            title: 'tits and ass',
//            keywords: 'tits ass sex',
//            description: 'im a pinball wizard or something. boobs.',
//            createdAt: new Date(),
//            username: 'maggie',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//
//
//    VideoComments.remove({});
//
//    UserProfileComments.remove({});
//    //TODO: create dummy user profile comments
//}