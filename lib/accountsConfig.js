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
        }
    },
    preSignUpHook: VerifyUserCloseSignupModal,
    onSubmitHook: VerifyUserCloseSignupModal,
    onLogoutHook: closeSignupModal
});

function VerifyUserCloseSignupModal() {
    if (Meteor.user()) {
        $('#user-account-modal').closeModal();
    }
}

function closeSignupModal() {
    $('#user-account-modal').closeModal();
}

function initializeModal() {
    $('#user-panel-button').closeModal();
    $('ul.tabs').tabs();
}
