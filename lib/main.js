this.Pages = new Meteor.Pagination(Items, {
    debug: true,
    availableSettings: {
        limit: true,
        sort: true,
        filters: true
    },
    infinite: true,
    infiniteTrigger: .9,
    infiniteRateLimit: 1,
    infiniteStep: 1,
    itemTemplate: "item",
    pageSizeLimit: 1000,
    perPage: 10,
    maxSubscriptions: 500,
    dataMargin: 30,
    router: "iron-router",
    sort: {
        title: 1
    }
});