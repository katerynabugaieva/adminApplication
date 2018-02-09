let funcLogout = function(){
    console.log('hook logout');
    Router.go('container');
};

let funcSubmit = function(){
    let state = AccountsTemplates.getState();

    if (state === "resetPwd"){
         console.log("reset");
         $('#login-dropdown').removeClass("open");
         AccountsTemplates.setState("signIn");
    };


     if (state === "signUp"){
         console.log('signUp')
       //alert("We sent verification letter. Please, check your email box");
    };

     if (state === "signIn"){
      console.log('signin');
    };
}

let funcPostSignUpHook = function(){
};

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: false,
    showPlaceholders: false,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: funcLogout,
    onSubmitHook: funcSubmit,
   // postSignUpHook: funcPostSignUpHook,
    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        // title: {
        //     forgotPwd: "Recover Your Password"
        // },
    },
});


//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
// AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
//AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('signIn', {
    redirect: function () {
        let user = Meteor.user();
        if (user)
            Router.go('/');
    }
});

/*
AccountsTemplates.configureRoute('signIn', {
    redirect: function(){
        let user = Meteor.user();
        if (user)
          Router.go('/customers/' + Meteor.userId());
    }
});
*/