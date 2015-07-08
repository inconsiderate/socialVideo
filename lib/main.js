

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
    infiniteItemsLimit: 20,
    infiniteTrigger: .8,
    itemTemplate: "singleVideo",
    pageSizeLimit: 10,
    perPage: 10,
    maxSubscriptions: 10,
    dataMargin: 30,
    router: "iron-router",
    sort: {
        title: 1
    }
});


AccountsTemplates.configure({

    enablePasswordChange: true,

    sendVerificationEmail: false,
    showResendVerificationEmailLink: false,

    showForgotPasswordLink: true,

    // Client-side Validation
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        },
    },
    preSignUpHook: closeSignupModal,
    onSubmitHook: initializeModal,
    onLogoutHook: closeSignupModal
});

function closeSignupModal (password, info) {
    $('#user-account-modal').closeModal();
}

function initializeModal() {
    $('#user-panel-button').leanModal();
    $('ul.tabs').tabs();
}