import { LightningElement } from 'lwc';

export default class PatientDetails extends LightningElement {


    booleanflagvalue = false;

    showformHandler(){

        this.booleanflagvalue = true;

    }

    hideformHandler(){

        this.booleanflagvalue = false;
        
    }
}