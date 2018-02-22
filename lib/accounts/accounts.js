var funcLogout = function(){
    console.log('hook logout');
   // Router.go('landingPage');
    Router.go('/')
};

var funcSubmit = function(){
    var state = AccountsTemplates.getState();

    if (state === "resetPwd"){
         console.log("reset");
         $('#login-dropdown').removeClass("open");
         AccountsTemplates.setState("signIn");
    };

if(state === 'changePwd'){
    console.log("change password");
}
     if (state === "signUp"){
         console.log('signUp')
       //alert("We sent verification letter. Please, check your email box");
    };

     if (state === "signIn"){
      console.log('signin');
    };
}

var funcPostSignUpHook = function(){
};

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: true,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
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
            signUp: 'change password'
        },

        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
    },
});


AccountsTemplates.configureRoute('signIn', {
    redirect: function () {
        var user = Meteor.user();
        if (user)
            Router.go('/');
    }
});



// AccountsTemplates.configureRoute('signIn', {
//     redirect: function(){
//         let user = Meteor.user();
//         if (user)
//           Router.go('/customers/' + Meteor.userId());
//     }
// });
