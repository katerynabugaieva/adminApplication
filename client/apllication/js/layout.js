Template.layout.helpers({
    name: function () {
        if (Customers.findOne({idMeteor: Meteor.userId()})) {
            var name = Customers.findOne({idMeteor: Meteor.userId()}).name;
            return name;
        }
        else

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
