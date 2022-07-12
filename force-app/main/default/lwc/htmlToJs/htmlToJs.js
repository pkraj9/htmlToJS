import { LightningElement } from 'lwc';

export default class HtmlToJs extends LightningElement {

    letterHandler(event){
        var VarValueWeGotFromHTML = event.target.value;
        if(VarValueWeGotFromHTML.length != 0)
            alert('you have entered a letter = ' + VarValueWeGotFromHTML );
    }
}