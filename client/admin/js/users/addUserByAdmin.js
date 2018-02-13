Template.addUserByAdmin.events({
    'click #submitUser': function(){
        var user = {};
        var existUser = Workers.find().fetch()

        user.number = ++existUser[existUser.length-1].number;
        user.email = $("#iEmailUser").val();
        user.surname = $("#iSurnameUser").val();
        user.name = $("#iNameUser").val();

        user.middlename = $("#iMiddleNameUser").val();

        user.birthday = $("#iDateOfBirth").val();
        user.datestart = $("#iDateStart").val();
        user.comments = $("#iCommentUser").val();









        // userSalary.date = $('#iDate').val();
        //
        // userSalary.curs840 = $('#i840Curs').val();
        // userSalary.curs978 = $('#i978Curs').val();
        //
        // userSalary.name = $('#iName').val();
        // userSalary.salary840 = $('#i840Salary').val();
        // userSalary.card980 = $('#i980Card').val();
        // userSalary.cash = $('#iCash').val();
        // userSalary.currencyCash = $('#iCurrency').val();
        // userSalary.cash978 = $('#i978Cash').val();
        //
        // userSalary.dollToEurCurs = (parseFloat(userSalary.curs978) / parseFloat(userSalary.curs840)).toFixed(4);
        // userSalary.dollToEurSalary =  (userSalary.salary840 / userSalary.dollToEurCurs).toFixed(2);
        //
        // var curr = 1;
        // if($('#iCurrency').val() === '980'){
        //     curr = 1;
        // } else if($('#iCurrency').val() === '978'){
        //     curr = 2;
        // } else if ($('#iCurrency').val() === ''){
        //     curr = 0;
        // }
        // userSalary.cash980 = userSalary.salary840 * userSalary.curs840
        //     - userSalary.cash978 * userSalary.curs978
        //     - userSalary.card980
        //     - userSalary.cash * curr;
        console.log(user)

        Workers.insert(user);
    }
});