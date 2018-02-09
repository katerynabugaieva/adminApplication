/**
 * Created by 1000geeks on 24.04.17.
 */
Customers = new Mongo.Collection('customers');

Customers.allow({
    update: function (userId, doc) {
        return true
    }, //{return allowToEdit(userId, doc);},  //{ return true;}, //ownsProfile(userId, doc); },
    remove: function (userId, doc) {
        return true
    },//{return allowToEdit(userId, doc);},   //{ return true;} //ownsProfile(userId, doc); },
    insert: function (userId, doc) {
        return true
    }
});



