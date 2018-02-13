Accounts.onCreateUser(function (options, user) {
    user.profile = {'roles': ['user']};
    Customers.insert({
        //id: user._id,
        username: user.emails[0].address.split('@')[0],
        email: user.emails[0].address,
        role: 'user'
    }); //uncomment for production after reset - in Muslim/

    console.log(user);

    return user;

});

