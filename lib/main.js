

Pages = new Meteor.Pagination(Videos, {
    debug: true,
    availableSettings: {
        limit: true,
        sort: true,
        filters: true
    },
    infinite: true,
    divWrapper: "pagesCont row",
    infiniteTrigger: .9,
    infiniteRateLimit: 1,
    infiniteStep: 1,
    itemTemplate: "video",
    pageSizeLimit: 1000,
    perPage: 10,
    maxSubscriptions: 500,
    dataMargin: 30,
    router: "iron-router",
    sort: {
        title: 1
    }
});

