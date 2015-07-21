var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 5
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email'
    },
    pwd
]);

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

//Accounts.onCreateUser(function(options, user) {
//    //pass the surname in the options
//
//    user.profile['surname'] = options.surname;
//
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
