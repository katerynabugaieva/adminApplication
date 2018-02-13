Template.admin.events({
    'click #bSalary': function(){
        $('#divSalary').toggle();

        if ($('#divSalary').attr('hide', false)) {
            $('#bSalary').addClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bUsers').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#divUsers').hide();
        }
    },
    'click #bUsers': function(){
        $('#divUsers').toggle();
        $('#divSalary').toggle();

        if ($('#divUsers').attr('hide', false)) {
            $('#bUsers').addClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#bSalary').removeClass("button button--aylen button--text-thick button--border-medium button--round-s");
            $('#divSalary').hide();
        }
    }
})