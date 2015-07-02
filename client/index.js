if (Meteor.isClient) {

    Template.searchForm.events({
        "submit .search-field-form": function (event) {
            var searchFilter = event.target.filterField.value;
            Pages.set({
                filters: {
                    $text: { $search: searchFilter }
                }
            });
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
                description: description,
                owner: Meteor.userId(),
                username: Meteor.user().username,
                createdAt: new Date() // current time
            });
            event.target.title.value = "";
            event.target.path.value = "";
            event.target.description.value = "";
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

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});