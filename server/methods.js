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
                    email: 'sonnensmile@gmail.com',
                    password: '123456',
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
                    email: 'sonnensmile@gmail.com',
                    surname: 'Bugaeiva',
                    name: 'Kate',
                   birthday: '12.01.1988',
                   datestart: '04-01-2017',
                   salary: '1000',
                    password: '123456',
                    middlename: 'Anatolyevna',
                   comments: 'murrr'
                })

                userId = Accounts.createUser({
                    email: 'test@gmail.com',
                    password: '123456',
                });
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
        Workers.insert({
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
    }

})
;


