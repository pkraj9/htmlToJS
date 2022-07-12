import { LightningElement } from 'lwc';

import WelcomLabel from '@salesforce/label/c.WelcomLabel';
import HomePageLabel from '@salesforce/label/c.HomePageLabel';
import NewClientLabel from '@salesforce/label/c.NewClientLabel';

export default class CustomLabel extends LightningElement {

    labelList = {
        WelcomLabel,
        HomePageLabel,
        NewClientLabel
    };

    newClientHandler(){

        alert('entry done !!!');
    }
}