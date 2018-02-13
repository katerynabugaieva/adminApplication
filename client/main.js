import './main.html';

if(Meteor.isClient) {
    Meteor.subscribe('users');
    Meteor.subscribe('customers');
    Meteor.subscribe('salary');
    Meteor.subscribe('workers');
}
