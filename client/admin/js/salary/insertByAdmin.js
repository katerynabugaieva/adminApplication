Template.insertByAdmin.onCreated(function () {
})

Template.insertByAdmin.onRendered(function () {
})


Template.insertByAdmin.helpers({
    selectedCurrency: function (key) {
        return $('#currencySelect').val()
    },


    workersItems: function () {
        import selectWorker from './selectNames.js'

        var workList = Customers.find().fetch();

        var workers = ['Выберите работника']

        for (var i = 0; i < workList.length; i++) {
            workers.push(workList[i].surname);
        }

        var arrWorkers = selectWorker(workers);

        var pos = workers.indexOf(this.name);
        if (pos != -1) {
            arrWorkers[pos].selected = "selected";
        }
        return arrWorkers;
    },

})


Template.insertByAdmin.events({
    'click #submitSalary': function (e) {
        e.preventDefault();
        e.stopPropagation();

        var userSalary = {};

        var existCollection = Salary.find().fetch()

        userSalary.number = ++existCollection[existCollection.length - 1].number;
        userSalary.date = $('#iDate').val();

        userSalary.curs840 = $('#i840Curs').val();
        userSalary.curs978 = $('#i978Curs').val();

        // userSalary.name = $('#iName').val();
        userSalary.name = $('#workerSelect').val()
        userSalary.salary840 = $('#i840Salary').val();
        userSalary.card980 = $('#i980Card').val();
        if ($('#iCash').val() !== '') {
            userSalary.cash = $('#iCash').val();
        } else {
            userSalary.cash = 0
        }
        userSalary.currencyCash = $('#currencySelect').val()
        userSalary.cash978 = $('#i978Cash').val();

        userSalary.dollToEurCurs = (parseFloat(userSalary.curs978) / parseFloat(userSalary.curs840)).toFixed(4);
        userSalary.dollToEurSalary = (userSalary.salary840 / userSalary.dollToEurCurs).toFixed(2);

        var curr = 0;

        if ($('#currencySelect').val() === 980) {
            curr = 1;
        } else if ($('#currencySelect').val() === 978) {
            curr = parseFloat(userSalary.curs978);
        } else if ($('#currencySelect').val() === '') {
            curr = 0;
        }
      //  console.log(curr)
        userSalary.cash980 = userSalary.salary840 * userSalary.curs840
            - userSalary.cash978 * userSalary.curs978
            - userSalary.card980
            - userSalary.cash * curr;
      //  console.log(userSalary)

        Salary.insert(userSalary);
        $('#cursNB').text('')
        $('#nameNB').text('')
    },

    'change #iDate': function () {
        //      import globalObject from './insertByAdmin.js';
        //   console.log(globalObject)

        var data = $('#iDate').val();
        var existData = Salary.find({date: data}).fetch()
        if (existData.length > 0) {
            $('#i840Curs').val(existData[0].curs840);
            $('#i978Curs').val(existData[0].curs978);
            $('#cursNB').text("Курс соответствует выбранной дате. Если за эту дату вводилось БОЛЕЕ 1 курса, используется первый. При необходимости изменяется вручную")
        } else {
            $('#i840Curs').val(1);
            $('#i978Curs').val(1);
            $('#cursNB').text('')
        }
    },

    'change #iName': function () {
        var name = $('#iName').val();
        var existData = Salary.find({name: name}).fetch()
     //   console.log(existData)
        if (existData.length > 0) {
            $('#i840Salary').val(existData[existData.length - 1].salary840);
            $('#i980Card').val(existData[existData.length - 1].card980);
            $('#nameNB').text("Зарплата и карточные перечисления соответствуют фамилии. Если по этому сотруднику вводились разные данные, испольуется последние введенные. При необходимости изменяются вручную ")
        } else {
            $('#i840Salary').val(0);
            $('#i980Card').val(0);
            $('#nameNB').text('')
        }
    },

    'change #workerSelect': function () {
        var name = $('#workerSelect').val();
     //   console.log(name)
        var existData = Salary.find({name: name}).fetch()
      //  console.log(existData)
        if (existData.length > 0) {
            $('#i840Salary').val(existData[existData.length - 1].salary840);
            $('#i980Card').val(existData[existData.length - 1].card980);
            $('#nameNB').text("Зарплата и карточные перечисления соответствуют фамилии. Если по этому сотруднику вводились разные данные, испольуется последние введенные. При необходимости изменяются вручную ")
        } else {
            $('#i840Salary').val(0);
            $('#i980Card').val(0);
            $('#nameNB').text('')
        }
    }
});














