Template.searchForm.events({
    "submit .search-field-form": function (event) {
        var searchFilter = event.target.searchField.value;
        Pages.set({
            filters: {
                $text: {$search: searchFilter}
            }
        });
        event.target.searchField.value = "";
        event.preventDefault();
        return false;
    }
});

Template.submitNewVideo.helpers({
    "files": function () {
        return S3.collection.find();
    }
});

Template.submitNewVideo.events({
    "submit .submit-video-form": function (event) {
        var files = $("input[type='file']")[0].files;

        var title = event.target.video_title.value;
        var desc = event.target.video_description.value;
        //var keywords = event.target.video_keywords.value;

        S3.upload({
            files: files,
            path: "prodvideos"
        }, function (e, r) {
            if (e == null) {
                Materialize.toast('Upload Successful!', 4000);
                Meteor.call('insertVideo', title, desc, r.url);
                //Videos.insert({
                //    title: title,
                //    path: r.url,
                //    //keywords: keywords,
                //    description: desc,
                //    createdAt: new Date(),
                //    owner: Meteor.userId(),
                //    username: Meteor.user().username
                //});

            } else {
                Materialize.toast('Upload failed for some reason.', 4000);
                Materialize.toast(e, 4000);
            }
        });
        //event.target.title.value = "";
        //event.target.path.value = "";
        //event.target.keywords.value = "";
        //event.target.description.value = "";
        event.preventDefault();
        return false;
    }
});
