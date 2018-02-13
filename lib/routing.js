Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',

    waitOn: function () {
        return [
            //  Meteor.subscribe('shopping')
            //   Meteor.subscribe('customer'),
            //   Meteor.subscribe('avatar'),
            //  Meteor.subscribe('documents'),
        ]
    }
});




Router.map(function () {
    /*
     this.route('post', {
     path: '/',
     data: function () {
     //  return Customers.findOne({id: Meteor.userId()});
     return Meteor.users.findOne({id: Meteor.userId()});
     }
     });
     */

    this.route('admin', {
        path: '/admin'
    });
    // this.route('bonus', {
    //     path: '/bonus'
    // });
});
