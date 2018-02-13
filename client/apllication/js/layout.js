Template.layout.helpers({
    name: function () {
        // if (Customers.findOne({ id: Meteor.userId() })) {
        //     let name = Customers.findOne({ id: Meteor.userId() }).username;
        //     return name;
        // }
        // else
            return "User";
    },
    isAdmin: function() {
        if (Meteor.user()) {
            if (Meteor.user().profile.roles[0] == 'admin') {
                return true;
            } else return false;
        }
    },

});
