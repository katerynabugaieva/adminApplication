/**
 * Created by 1000geeks on 24.04.17.
 */
Meteor.methods({

    reset: function () {
        Meteor.users.remove({});
        Customers.remove({})
        Salary.remove({});
        console.log("reset!!!");

        if (Meteor.isServer) {
          //  if (Meteor.users.find().count() === 0 && Customers.find().count() === 0) {
            if (Meteor.users.find().count()){
                userId = Accounts.createUser({
                    email: 'sonnensmile@gmail.com',
                    password: '194657535',
                });

                Meteor.users.upsert(
                    {_id: userId},
                    {
                        $set: {
                            profile: {
                                roles: ['admin'],
                            }
                        }
                    }
                );

                userId = Accounts.createUser({
                    email: 'test@gmail.com',
                    password: '123456',
                });
            }
        }
   Meteor.call('addFirstUser')
    }
    ,

    resetCustomers: function () {
        Customers.remove({});
        console.log('customers');
    },


resetSalary: function(){
        Salary.remove({});
},

addFirstUser: function(){
        console.log('i add first user with nothing')
Salary.insert({
    number: 0
})
    Workers.insert({
        number: 0
    })
}
,
    showCustomers: function(){
        console.log(Customers.find().fetch())
    }

})
;


