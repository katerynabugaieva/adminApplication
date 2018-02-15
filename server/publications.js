
// Meteor.publish('customers', function() {
//     return Customers.find({id: this.userId});
// });

Meteor.publish('customers', function() {
    return Customers.find();
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});

Meteor.publish('salary', function() {
    return Salary.find();
});

Meteor.publish('workers', function() {
    return Workers.find();
});


//
// Meteor.publish('salary', function(author) {
//     return Salary.find({name: author});
// });