// workers = [];
// export default workers;
Template.addUserByAdmin.onCreated(function(){
 //   console.log(Customers.find().fetch())
})

Template.addUserByAdmin.events({
    'click #submitUser': function (e) {
        e.preventDefault();
        e.stopPropagation();
       // import workers from "./addUserByAdmin.js";

        var user = {};
        //var existUser = Workers.find().fetch()

        var existUser = Customers.find().fetch()
  //      console.log(existUser)

        user.number = ++existUser[existUser.length - 1].number;
        user.email = $("#iEmailUser").val();
        user.surname = $("#iSurnameUser").val();
        user.name = $("#iNameUser").val();

        user.middlename = $("#iMiddleNameUser").val();
        user.salary = $('#iSalaryUser').val()
        user.birthday = $("#iDateOfBirth").val();
        user.datestart = $("#iDateStart").val();
        user.comments = $("#iCommentUser").val();

   //     console.log(user)

        var existCustomer = Customers.find({email: user.email}).fetch();
        if ((existCustomer.length > 0)) {
            console.log(existCustomer)
        } else {
            console.log('noUser')
           // Customers.insert(user);
          //  Meteor.call('createMeteorUser', user)
          //  Workers.insert(user);
            Customers.insert(user);
            // workers.push(user.surname);
            // console.log(workers)
        }
    }
});
