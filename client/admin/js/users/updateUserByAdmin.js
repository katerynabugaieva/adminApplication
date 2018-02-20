Template.updateUserByAdmin.events({
    'click #checkNumUserUp': function (e) {
        e.preventDefault();
        e.stopPropagation();
        var data = parseInt($('#userForUpdate').val());
        var currentLis;
        currentLis = Customers.findOne({number: data});

        if (currentLis) {
            $('#isCorrectUserUp').text('запись найдена');
            $('#divUserUpdate').show();
        } else {
            $('#isCorrectUserUp').text('запись не найдена');
            $('#divUserUpdate').hide();
        }
        return false;
    }
    ,

    'click #submitUserUp': function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('in')
        var data = parseInt($('#userForUpdate').val());
        var currentLis;
        currentLis = Customers.findOne({number: data});

        var existData = Customers.findOne({number: $('#iNumUserUp').val()})

        var user = {};

        if (currentLis) {
            console.log('i am in')
            if ($('#iNumUserUp').val() !== '') {
                //  if(existData){
                //     $('#existData').show()
                //      console.log(existData)
                // userSalary.number = parseInt(existData.number);
                //  }
                //  else{
                //      $('#existData').hide();
                console.log(existData)
                user.number = parseInt($('#iNumUserUp').val());
                //  }
            }

            if($('#iEmailUserUp').val() !== ''){
                user.email = $('#iEmailUserUp').val();
            }
            if($('#iSurnameUserUp').val() !== ''){
                user.surname = $('#iSurnameUserUp').val();
        }
            if($('#iNameUserUp').val() !== ''){
                user.name = $('#iNameUserUp').val();
        }
            if($('#iMiddleNameUserUp').val() !== ''){
                user.middlename = $('#iMiddleNameUserUp').val();
        }
            if($('#iDateOfBirthUp').val() !== ''){
                user.birthday = $('#iDateOfBirthUp').val();
        }
            if($('#iDateStartUp').val() !== ''){
                user.datestart = $('#iDateStartUp').val();
            }
            if($('#iCommentUserUp').val() !== ''){
                user.comments = $('#iCommentUserUp').val();
        }

            console.log(user)
            Customers.update(currentLis._id, {$set: user}, function (error) {
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