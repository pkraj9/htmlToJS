import { LightningElement } from 'lwc';

export default class JsToHtml extends LightningElement {

    fullname = 'John Wick';

    changeNameHandler(event){

        this.fullname= 'Taco Gabril';
    }
}