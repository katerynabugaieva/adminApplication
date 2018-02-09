/**
 * Created by 1000geeks on 24.04.17.
 */
Meteor.methods({

    reset: function () {

        Meteor.users.remove({});
        Customers.remove({})
        console.log("reset!!!");
      //  console.log(Meteor.users.find().count());

        if (Meteor.isServer) {
            if (Meteor.users.find().count() === 0 && Customers.find().count() === 0) {

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

         //   console.log(userId);
        }
    }
    ,

    resetCustomers: function () {
        Customers.remove({});
        console.log('customers');
    },


resetSalary: function(){
        Salary.remove({})
}



})
;