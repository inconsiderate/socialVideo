

Videos._ensureIndex( { "$**": "text" } );


Meteor.methods({
    insertVideo: function (title, desc, url) {

        Videos.insert({
            title: title,
            path: url,
            //keywords: keywords,
            description: desc,
            //createdAt: new Date(),
            owner: Meteor.userId()
            //username: this.user().username
        });

        //if () {
        //    throw new Meteor.Error("pants-not-found", "Can't find my pants");
        //}

        return "some return value";
    }

});