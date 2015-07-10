
Videos._ensureIndex( { "$**": "text" } );

Meteor.methods({
    insertVideo: function (title, desc) {

        Videos.insert({
            title: title,
            //path: url,
            //keywords: keywords,
            description: desc,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });

        //if () {
        //    throw new Meteor.Error("pants-not-found", "Can't find my pants");
        //}

        return true;
    }

});