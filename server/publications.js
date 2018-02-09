/**
 * Created by 1000geeks on 30.01.17.
 */

Meteor.publish('customers', function() {
    return Customers.find({id: this.userId});
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});
Meteor.publish('salary', function() {
    return Salary.find();
});

