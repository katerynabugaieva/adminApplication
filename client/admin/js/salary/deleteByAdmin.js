Template.deleteByAdmin.events({

    'click #checkNumDel': function () {
        var data = parseInt($('#dataForDelete').val());
        console.log(data)
        var currentLis;
        currentLis = Salary.findOne({number: data});
        console.log(currentLis)

        if (currentLis) {
            $('#isCorrectDel').text('data is found');
            $('#divA').show();
        } else {
            $('#isCorrectDel').text('data is not found');
            $('#divA').hide();
        }
    }

    ,
    'change #acceptCheckboxDel': function () {
        if ($("#acceptCheckboxDel").prop("checked")) {
            $('#submitDelete').attr('disabled', false);
        }
        else {
            $('#submitDelete').attr('disabled', true);
        }
    }

    ,

    'click #submitDelete': function () {
        var data = parseInt($('#dataForDelete').val());
        var currentLis;

        currentLis = Salary.findOne({number: data});
        console.log(currentLis)
        if (currentLis) {
            Salary.remove(currentLis._id);
        }
    }
    ,

});