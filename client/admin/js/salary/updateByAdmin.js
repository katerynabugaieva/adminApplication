Template.updateByAdmin.helpers({
    selectedCurrency: function (key) {
        return $('#currencySelectUp').val()
    },
})

Template.updateByAdmin.events({
    'click #checkNumUp': function (e) {
        e.preventDefault();
        e.stopPropagation();
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
        return false;
    }


    ,

    'click #submitSalaryUp': function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('in')
        var data = parseInt($('#dataForUpdate').val());
        var currentLis;
        currentLis = Salary.findOne({number: data});

        var existData = Salary.findOne({number: parseInt($('#iNumUp').val())})
        var userSalary = {};


        if (currentLis) {
            //номер записи
            if ($('#iNumUp').val() !== '') {
               if(existData){
                   alert('Запись с таким номером уже существует')
               }
               else{
                    userSalary.number = parseInt($('#iNumUp').val());
                }
            }

            //дата
            if($('#iDateUp').val() !== ''){
                userSalary.date = $('#iDateUp').val();
            }

            //валютные курсы
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

            //фио
            if($('#iNameUp').val() !== '') {
                userSalary.name = $('#iNameUp').val();
            }

            //оклад
            if($('#i840SalaryUp').val() !== '') {
                userSalary.salary840 = $('#i840SalaryUp').val();
            } else {
                userSalary.salary840 = currentLis.salary840;
            }

            //безнал
            if($('#i980CardUp').val() !== '') {
                userSalary.card980 = $('#i980CardUp').val();
            }else {
                userSalary.card980 = currentLis.card980;
            }

            //аванс
            if($('#iCashUp').val() !== '') {
                userSalary.cash = $('#iCashUp').val();
                console.log($('#iCashUp').val())
            }else{
                userSalary.cash = currentLis.cash
            }

            //валюта аванса
            if($('#iCurrencyUp').val() !== '') {
                userSalary.currencyCash = $('#currencySelectUp').val();
            }else {
                userSalary.currencyCash = currentLis.currencyCash;
            }

            //наличные евро
            if($('#i978CashUp').val() !== '') {
                userSalary.cash978 = $('#i978CashUp').val();
            }else {
                userSalary.cash978 = currentLis.cash978;
            }

            var curr = 0;
            if ($('#currencySelect').val() === 980) {
                curr = 1;
            } else if ($('#currencySelect').val() === 978) {
                curr = parseFloat(userSalary.curs978) ;
            } else if ($('#currencySelect').val() === '') {
                curr = 0;
            }

            //если менялся курс
            if(($('#i840CursUp').val() !== 0) || ($('#i978CursUp').val() !== 0)) {
                userSalary.dollToEurCurs = (parseFloat(userSalary.curs978) / parseFloat(userSalary.curs840)).toFixed(4);
                userSalary.dollToEurSalary = (userSalary.salary840 / userSalary.dollToEurCurs).toFixed(2);
                userSalary.cash980 = userSalary.salary840 * userSalary.curs840
                    - userSalary.cash978 * userSalary.curs978
                    - userSalary.card980
                    - userSalary.cash * curr;
            }

             // console.log('dollToEurCurs ' + userSalary.dollToEurCurs )
            // console.log('dollToEurSalary ' + userSalary.dollToEurSalary )
            // console.log('cash980 ' + userSalary.cash980 )
            // console.log('userSalary.salary840 * userSalary.curs840 ' + userSalary.salary840 * userSalary.curs840)
            // console.log('userSalary.cash978 * userSalary.curs978 ' + userSalary.cash978 * userSalary.curs978)
            // console.log('userSalary.card980 ' + userSalary.card980)
            // console.log('userSalary.cash * curr ' + userSalary.cash * curr)
            // console.log(curr)

            console.log('840 Curs ' + userSalary.curs840 )
            console.log('978 curs' + userSalary.curs978 )
            console.log('cash980 ' + userSalary.cash980 )
            console.log('card980 ' + userSalary.card980 )


            console.log('userSalary.salary840 ' + userSalary.salary840 )
            console.log('userSalary.curs840 ' + userSalary.curs840 )
            console.log('userSalary.cash978 ' + userSalary.cash978 )
            console.log('userSalary.curs978 ' + userSalary.curs978 )
            console.log('userSalary.card980 ' + userSalary.card980 )
            console.log('userSalary.cash ' + userSalary.cash)




            console.log(userSalary)


            Salary.update(currentLis._id, {$set: userSalary}, function (error) {
                if (error) {
                    alert(error.reason);
                } else {
                    console.log('update');
                }
            });


        }
        return false;
    }
    ,
});