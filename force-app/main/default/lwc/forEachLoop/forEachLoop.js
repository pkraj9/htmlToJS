import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {

    CEOList;

    showlistHandler(){

        this.CEOList = [

            {
                id: 1,
                name: 'Mark Benioff',
                title: 'CEO of Salesforce',
            },
            {
                id: 2,
                name: 'Sundar Pichai',
                title: 'CEO of Google',
            },
            {
                id: 3,
                name: 'Mark Zuckerberg',
                title: 'CEO of Meta FB',
            },
            {
                id: 4,
                name: 'Jack Dorsey',
                title: 'CEO of Twitter',
            },
            {
                id: 5,
                name: 'Jeff Bezos',
                title: 'CEO of Amazon',
            },

        ]
    }
}