Template.deleteUserByAdmin.events({

    'click #checkNumUserDel': function (e) {
        var data = parseInt($('#userForDelete').val());
        console.log(data)
        var currentLis;
        currentLis = Customers.findOne({number: data});
        console.log(currentLis)

        if (currentLis) {
            $('#isCorrectUserDel').text('data is found');
            $('#divUserDel').show();
        } else {
            $('#isCorrectUserDelDel').text('data is not found');
            $('#divUserDel').hide();
        }
        return false;

    }
    ,
    'change #acceptCheckboxUserDel': function (e) {
        if ($("#acceptCheckboxUserDel").prop("checked")) {
            $('#submitUserDelete').attr('disabled', false);
        }
        else {
            $('#submitUserDelete').attr('disabled', true);
        }
        return false;

    }
    ,

    'click #submitUserDelete': function (e) {
        var data = parseInt($('#userForDelete').val());
        var currentLis;

        currentLis = Customers.findOne({number: data});
        console.log(currentLis)
        if (currentLis) {
            Customers.remove(currentLis._id);
        }
        return false;
    }
    ,
});