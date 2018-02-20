Template.workerView.events({
    'click #bSalaryUser': function(){
        console.log('bSalaryUser')
        $('#divSalaryUser').toggle();

        if ($('#divSalaryUser').attr('hide', false)) {
            $('#bSalaryUser').addClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bProfileUser').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#divProfileUser').hide();
        }


        var userSalary = Salary.find().fetch()
        console.log(userSalary)

























    },
    'click #bProfileUser': function(){
        console.log('bProfileUser')
        $('#divProfileUser').toggle();
        $('#divSalaryUser').toggle();

        if ($('#divProfileUser').attr('hide', false)) {
            $('#bProfileUser').addClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bSalaryUser').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#divSalaryUser').hide();
        }
    }
})