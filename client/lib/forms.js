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
        var videoData = [];
        var title = event.target.video_title.value;
        var desc = event.target.video_description.value;

        var genre1 = event.target.genre1;
        var genre2 = event.target.genre2;
        var genre3 = event.target.genre3;
        var genre4 = event.target.genre4;
        var genre5 = event.target.genre5;

        //var keywords = event.target.video_keywords.value;
        //var videoData.genres = event.target
        //$(genre1).is(':checked');

        //S3.upload({
        //    files: files,
        //    path: "prodvideos"
        //}, function (e, r) {
        //    if (e == null) {
                Materialize.toast('Upload Successful!', 4000);
                Meteor.call('insertVideo', title, desc);
        //    } else {
        //        Materialize.toast('Upload failed for some reason.', 4000);
        //        Materialize.toast(e, 4000);
        //    }
        //});
        event.target.video_title.value = "";
        //event.target.keywords.value = "";
        event.target.video_description.value = "";
        event.preventDefault();
        return false;
    }
});
