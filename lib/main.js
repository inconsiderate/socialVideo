

Pages = new Meteor.Pagination(Videos, {
    debug: true,
    availableSettings: {
        limit: true,
        sort: true,
        filters: true
    },
    infinite: true,
    divWrapper: "pagesCont row",
    infiniteRateLimit: 1,
    infiniteStep: 1,
    itemTemplate: "singleVideo",
    pageSizeLimit: 100,
    perPage: 10,
    maxSubscriptions: 500,
    dataMargin: 30,
    router: "iron-router",
    sort: {
        title: 1
    }
});

