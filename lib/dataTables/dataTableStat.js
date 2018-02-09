import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

DataTables = {};

DataTables.Salary = new Tabular.Table({
    name: "Salary",
    collection: Salary,
    columns: [
        {data: "date", title: "#"},
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


Meteor.isClient && Template.registerHelper('DataTables', DataTables);


