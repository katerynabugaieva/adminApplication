import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

DataTables1 = {};

DataTables1.Workers = new Tabular.Table({
    name: "Workers",
    collection: Workers,
    columns: [
        {data: "number", title: "#"},
        {data: "email", title: "email"},
        {data: 'surname', title: 'Фамилия'},
        {data: "name", title: "Имя"},
        {data: "middlename", title: "Отчество"},
        {data: "birthday", title: "Дата рождения"},
        {data: 'datestart', title: 'Начало работы'},
        {data: "comments", title: "Комментарий"},
]
});


Meteor.isClient && Template.registerHelper('DataTables1', DataTables1);


