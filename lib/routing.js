Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',

    waitOn: function () {
        return [
            //  Meteor.subscribe('shopping')
           // Meteor.subscribe('customer'),
            //   Meteor.subscribe('avatar'),
            //  Meteor.subscribe('documents'),
        ]
    }
});


Router.map(function () {

    // this.route('landingPage', {
    //     path: '/',
    //     // data: function () {
    //     //     return Customers.findOne({id: Meteor.userId()});
    //     // }
    // });

    this.route('admin', {
        path: '/'
    });

        // this.route('workerView', {
        // path: '/',
      //  data: function () {
          //  return Customers.findOne({idMeteor: Meteor.userId()})
      //  }
      //   });

});

var requireLogin = function () {
    if (!Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
};

var requireAdmin = function () {
    if (Meteor.user()) {
        if (Meteor.user().profile.roles[0] !== 'admin') {
            this.render('accessDenied');
        } else this.next();
    }
};

Router.onBeforeAction(requireLogin, {only: ['admin']});
Router.onBeforeAction(requireAdmin, {only: ['admin']});


