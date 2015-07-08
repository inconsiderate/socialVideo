if (Meteor.isClient) {

    Template.searchForm.events({
        "submit .search-field-form": function (event) {
            var searchFilter = event.target.searchField.value;
            Pages.set({
                filters: {
                    $text: { $search: searchFilter }
                }
            });
            event.target.searchField.value = "";
            event.preventDefault();
            return false;
        }
    });

    Template.submitVideo.events({
        "submit .submit-video-form": function (event) {
            var title = event.target.title.value;
            var description = event.target.description.value;
            var path = event.target.path.value;
            var keywords = event.target.keywords.value;
            Videos.insert({
                title: title,
                path: path,
                keywords: keywords,
                description: description,
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username
            });
            event.target.title.value = "";
            event.target.path.value = "";
            event.target.keywords.value = "";
            event.target.description.value = "";
            event.preventDefault();
            return false;
        }
    });

    $(document).ready(function(){
        $('#user-panel-button').click(function() {
            $('ul.tabs').tabs();
            $('.dropdown-button').dropdown({
                    inDuration: 800,
                    outDuration: 225,
                    constrain_width: false, // Does not change width of dropdown to that of the activator
                    hover: true, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: true // Displays dropdown below the button
                }
            );
        });
        $('#user-panel-button').leanModal();
    });
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
