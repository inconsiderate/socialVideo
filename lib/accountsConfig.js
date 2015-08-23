

AccountsTemplates.configure({

    enablePasswordChange: true,

    sendVerificationEmail: false,
    showResendVerificationEmailLink: false,

    showForgotPasswordLink: true,

    // Client-side Validation
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: '/privacy',
    termsUrl: '/terms',

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
        }
    },
    preSignUpHook: VerifyUserCloseSignupModal,
    onSubmitHook: VerifyUserCloseSignupModal,
    onLogoutHook: closeSignupModal
});

Accounts.onCreateUser(function(options, user) {
    var options = {
        profile: {
            username: user._id
        }
    };

    if (options.profile) {
        user.profile = options.profile;
    }
    return user;
});

//Accounts.onCreateUser(function(options, user) {
//
//    user.profile.username = user._id;
//    return user;
//});


function VerifyUserCloseSignupModal() {
    if (Meteor.user()) {
        $('.modal').closeModal();
    }
}

function closeSignupModal() {
    $('.modal').closeModal();
}
