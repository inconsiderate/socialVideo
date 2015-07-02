
var N = 10;

if (Meteor.isServer && Videos.find().count() < N) {
    Videos.remove({});
    Videos._ensureIndex({
        id: 1
    });
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: i,
            path: 'videos/small.mp4',
            title: 'small video'
        });
    }
    for (i=0; i < N; i++ ) {
        Videos.insert({
            id: i,
            path: 'videos/medium.mp4',
            title: 'medium video'
        });
    }
}
