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

        console.log(user)

        Workers.insert(user);
    }
});