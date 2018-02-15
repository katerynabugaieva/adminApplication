import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

DataTablesSalary = {};

var newColl = Salary.find({name: 'qwerty'}).fetch()
//console.log(newColl)

DataTablesSalary.newColl = new Tabular.Table({
    name: "newColl",
    collection: Salary,
    columns: [
        {data: "number", title: "#"},
        {data: "date", title: "data"},
        {data: 'curs840', title: '$'},
        {data: "curs978", title: "eur"},
        {data: "name", title: "Сотрудник"},
        {data: "salary840", title: "К выдаче, $"},
        {data: 'card980', title: 'Карточка, грн'},
        {data: "cash", title: "Аванс"},
        {data: 'currencyCash', title: 'Валюта аванса'},
        {data: 'cash978', title: 'Выдано, eur'},
        {data: 'dollToEurCurs', title: '$/eur'},
        {data: 'dollToEurSalary', title: 'зп в $/eur'},
        {data: 'cash980', title: 'К выдаче, грн'},
    ]
});

//console.log(DataTablesSalary)

Meteor.isClient && Template.registerHelper('DataTablesSalary', DataTablesSalary);


