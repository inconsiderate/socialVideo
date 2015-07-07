
var N = 10;
var idnum = 1;

if (Meteor.isServer && Videos.find().count() < N) {
    Videos.remove({});

    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: idnum,
            path: 'videos/3gp_sample.3gp',
            title: '3gp sample',
            keywords: '3gp sample test1',
            description: '3gp sample test1 this is the description',
            createdAt: new Date(),
            username: 'trevor'
        });
        idnum++;
    }
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: idnum,
            path: 'videos/flv_sample.flv',
            title: 'flv sample',
            keywords: 'flv sample test2',
            description: 'flv sample test2 this is the description',
            createdAt: new Date(),
            username: 'sara'
        });
        idnum++;
    }
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: idnum,
            path: 'videos/jellyfish.mkv',
            title: 'jellyfish mkv',
            keywords: 'jellyfish mkv sample test2',
            description: 'this is the description and some jellyfish or whatever',
            createdAt: new Date(),
            username: 'trevor'
        });
        idnum++;
    }
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: idnum,
            path: 'videos/medium_mpeg4_sample.mp4',
            title: 'medium mpeg4 sample',
            keywords: 'medium mpeg4 mpg4 sample mp4',
            description: 'here is some description mp4',
            createdAt: new Date(),
            username: 'alice'
        });
        idnum++;
    }
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: idnum,
            path: 'videos/mkv_sample.mkv',
            title: 'mkv sample',
            keywords: 'mkv test1 sample unknown',
            description: 'this is an mkv with no description',
            createdAt: new Date(),
            username: 'alice'
        });
        idnum++;
    }
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: idnum,
            path: 'videos/small_mpeg4_sample.mp4',
            title: 'small mpeg4',
            keywords: 'test1 mpeg4 mpg4',
            description: 'without mp4 or sample in the keywords',
            createdAt: new Date(),
            username: 'sara'
        });
        idnum++;
    }
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: idnum,
            path: 'videos/wizard.mp4',
            title: '3mily is a wizard!',
            keywords: 'test2 wizard mp4',
            description: '3mily is a wizard with the mp4',
            createdAt: new Date(),
            username: '3mily'
        });
        idnum++;
    }
}
