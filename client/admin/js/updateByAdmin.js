Template.updateByAdmin.events({
    'click #checkNumUp': function () {
        var data = parseInt($('#dataForUpdate').val());
        //  console.log(data)
        var currentLis;
        currentLis = Salary.findOne({number: data});
        //   console.log(currentLis)

        if (currentLis) {
            $('#isCorrectUp').text('запись найдена');
            $('#divUpdate').show();
        } else {
            $('#isCorrectUp').text('запись не найдена');
            $('#divUpdate').hide();
        }
    }


    ,

    'click #submitUpdate': function () {
        var data = parseInt($('#dataForUpdate').val());
        var currentLis;
        currentLis = Salary.findOne({number: data});

        var existData = Salary.findOne({number: $('#iNumUp').val()})

        var userSalary = {};
        userSalary.name = 'qqq';

        if (currentLis) {
            console.log('i am in')
            if ($('#iNumUp').val() !== '') {
              //  if(existData){
              //     $('#existData').show()
              //      console.log(existData)
                   // userSalary.number = parseInt(existData.number);
              //  }
              //  else{
              //      $('#existData').hide();
                    console.log(existData)
                    userSalary.number = parseInt($('#iNumUp').val());
              //  }
            }


            if($('#iDateUp').val() !== ''){
                userSalary.date = $('#iDateUp').val();
            }

            if($('#i840CursUp').val() !== '') {
                userSalary.curs840 = $('#i840CursUp').val();
            } else {
                userSalary.curs840 = currentLis.curs840;
            }

            if($('#i978CursUp').val() !== '') {
                userSalary.curs978 = $('#i978CursUp').val();
            } else {
                userSalary.curs978 = currentLis.curs978;
            }

            if($('#iNameUp').val() !== '') {
                userSalary.name = $('#iNameUp').val();
            }

            if($('#i840SalaryUp').val() !== '') {
                userSalary.salary840 = $('#i840SalaryUp').val();
            } else {
                userSalary.salary840 = currentLis.salary840;
            }
            if($('#i980CardUp').val() !== '') {
                userSalary.card980 = $('#i980CardUp').val();
            }else {
                userSalary.card980 = currentLis.card980;
            }

            if($('#iCashUp').val() !== '') {
                userSalary.cash = $('#iCashUp').val();
            }

            if($('#iCurrencyUp').val() !== '') {
                userSalary.currencyCash = $('#iCurrencyUp').val();
            }else {
                userSalary.currencyCash = currentLis.currencyCash;
            }

            if($('#i978CashUp').val() !== '') {
                userSalary.cash978 = $('#i978CashUp').val();
            }else {
                userSalary.cash978 = currentLis.cash978;
            }

            var curr = 1;
            if($('#iCurrencyUp').val() === '980'){
                curr = 1;
            } else if($('#iCurrencyUp').val() === '978'){
                curr = 2;
            } else if ($('#iCurrencyUp').val() === ''){
                curr = 0;
            }

            if(($('#i840CursUp').val() !== 0) || ($('#i978CursUp').val() !== 0)) {
                userSalary.dollToEurCurs = (parseFloat(userSalary.curs978) / parseFloat(userSalary.curs840)).toFixed(4);
                userSalary.dollToEurSalary = (userSalary.salary840 / userSalary.dollToEurCurs).toFixed(2);
                userSalary.cash980 = userSalary.salary840 * userSalary.curs840
                    - userSalary.cash978 * userSalary.curs978
                    - userSalary.card980
                    - userSalary.cash * curr;
            }


            console.log('dollToEurCurs ' + userSalary.dollToEurCurs )
            console.log('dollToEurSalary ' + userSalary.dollToEurSalary )
            console.log('cash980 ' + userSalary.cash980 )
            console.log('userSalary.salary840 * userSalary.curs840 ' + userSalary.salary840 * userSalary.curs840)
            console.log('userSalary.cash978 * userSalary.curs978 ' + userSalary.cash978 * userSalary.curs978)
            console.log('userSalary.card980 ' + userSalary.card980)
            console.log('userSalary.cash * curr ' + userSalary.cash * curr)
            console.log(curr)

console.log(userSalary)
            Salary.update(currentLis._id, {$set: userSalary}, function (error) {
                if (error) {
                    alert(error.reason);
                } else {
                    console.log('update');
                }
            });


        }
    }
    ,

});