import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

DataTables1 = {};

DataTables1.Customers = new Tabular.Table({
    name: "Customers",
    collection: Customers,
    columns: [
        {data: "number", title: "#"},
        {data: "email", title: "email"},
        {data: 'surname', title: 'Фамилия'},
        {data: "name", title: "Имя"},
        {data: 'phone', title: 'Телефон'},
        {data: "birthday", title: "Дата рождения"},
        {data: 'datestart', title: 'Начало работы'},
        {data: 'salary', title: 'ставка'},
        {data: "comments", title: "Комментарий"},
]
});


Meteor.isClient && Template.registerHelper('DataTables1', DataTables1);


