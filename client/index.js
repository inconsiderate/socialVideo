if (Meteor.isClient) {

    Template.searchForm.events({
        "submit .search-field-form": function (event) {
            var searchFilter = event.target.filterField.value;
            console.log(searchFilter);
            if (searchFilter == 'test1') {
                Pages.set({
                    sort: {
                        title: -1
                    }
                });
            }
            if (searchFilter == 'test2') {
                Pages.set({
                    sort: {
                        title: 1
                    }
                });
            }
            event.target.filterField.value = "";
            event.preventDefault();
            return false;
        }
    });

    Template.submitVideo.events({
        "submit .submit-video-form": function (event) {
            var title = event.target.title.value;
            var description = event.target.description.value;
            var path = event.target.path.value;
            Videos.insert({
                title: title,
                path: path,
                description: description
                //owner: Meteor.userId(),
                //username: Meteor.user().username,
                //createdAt: new Date() // current time
            });
            event.target.title.value = "";
            event.target.path.value = "";
            event.target.description.value = ""
            event.preventDefault();
            return false;
        }
    })

}

var uploader = new Slingshot.Upload("myFileUploads");

uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
    if (error) {
        // Log service detailed response.
        console.error('Error uploading', uploader.xhr.response);
        alert (error);
    }
    else {
        Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});
    }
});