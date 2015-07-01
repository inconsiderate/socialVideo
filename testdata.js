
this.Items = new Meteor.Collection("items");

var N = 5;

if (Meteor.isServer && this.Items.find().count() < N) {
    Items.remove({});
    Items._ensureIndex({
        id: 1
    });
    for (i=0; i < N; i++ ) {
        Items.insert({
            id: i,
            path: 'videos/small.mp4',
            title: 'small'
        });
    }
    for (i=0; i < N; i++ ) {
        Items.insert({
            id: i,
            path: 'videos/medium.mp4',
            title: 'medium'
        });
    }
}
