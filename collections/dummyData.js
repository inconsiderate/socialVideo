//
//var N = 10;
//
//if (Meteor.isServer && Videos.find().count() < N) {
//    Videos.remove({});
//
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/jellyfish.mkv',
//            title: 'jellyfish mkv',
//            keywords: 'jellyfish mkv sample test2',
//            description: 'this is the description and some jellyfish or whatever',
//            createdAt: new Date(),
//            username: 'trevor',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/medium_mpeg4_sample.mp4',
//            title: 'medium mpeg4 sample long title lolwut too long',
//            keywords: 'medium mpeg4 mpg4 sample mp4',
//            description: 'here is some description mp4',
//            createdAt: new Date(),
//            username: 'alice',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/mkv_sample.mkv',
//            title: 'mkv sample',
//            keywords: 'mkv test1 sample unknown',
//            description: 'this is an mkv with no description',
//            createdAt: new Date(),
//            username: 'alice',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/small_mpeg4_sample.mp4',
//            title: 'small mpeg4',
//            keywords: 'test1 mpeg4 mpg4',
//            description: 'without mp4 or sample in the keywords',
//            createdAt: new Date(),
//            username: 'sara',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//    for (i = 0; i < N; i++) {
//        Videos.insert({
//            path: 'videos/wizard.mp4',
//            title: '3mily is a wizard!',
//            keywords: 'test2 wizard mp4',
//            description: '3mily is a wizard with the mp4',
//            createdAt: new Date(),
//            username: '3mily',
//            likes: Math.floor((Math.random() * 1000) + 1)
//        });
//    }
//
//    VideoComments.remove({});
//    //TODO: create dummy video comments
//    UserProfileComments.remove({});
//    //TODO: create dummy user profile comments
//}