/**
 * Created by 1000geeks on 24.04.17.
 */
Meteor.methods({

    reset: function () {
        Meteor.users.remove({});
        Customers.remove({})
        Salary.remove({});
        Workers.remove({})
        console.log("reset!!!");

        if (Meteor.isServer) {
              if (Meteor.users.find().count() === 0 && Customers.find().count() === 0) {
            //if (Meteor.users.find().count()) {
                userId = Accounts.createUser({
                    email: '1000geeks.com@gmail.com',
                    password: 'b1S0k0i0tDsN',
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

                Customers.insert({
                  idMeteor: userId,
                    number: 1,
                    email: '1000geeks.com@gmail.com',
                    surname: 'Admin',
                    name: 'Admin',
                   birthday: '01.01.1988',
                   datestart: '04-01-2017',
                   salary: '1000',
                    password: 'b1S0k0i0tDsN',
                    middlename: 'Admin',
                   comments: 'murrr'
                })


            }
        }
        Meteor.call('addFirstUser')
      console.log(Customers.find().fetch())
    }
    ,

    resetCustomers: function () {
        Customers.remove({});
        console.log('customers');
    },


    resetSalary: function () {
        Salary.remove({});
    },

    resetWorkers: function () {
        Workers.remove({})
    },

    addFirstUser: function () {
        console.log('i add first user with nothing')
        Salary.insert({
            number: 0
        })

        // Customers.insert({
        //     number:0
        // })
    }
    ,
    showCustomers: function () {
        console.log(Customers.find().fetch())
    },

    createMeteorUser: function(user){
        console.log('create user')

        userId = Accounts.createUser({
            email: user.email,
            password: '1000g0001',
        });

        Meteor.users.upsert(
            {_id: userId},
            {
                $set: {
                    profile: {
                        roles: ['user'],
                    }
                }
            }
        );
        user.idMeteor = userId;

        Customers.insert(user)
    },

    changeThePassword: function(password){

    }

})
;


