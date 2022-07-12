import { LightningElement, api } from 'lwc';

export default class Childcomponentscenario extends LightningElement {

    //to make these property publically available, in other components

    @api messagefromparent;
    @api projectcode;

}