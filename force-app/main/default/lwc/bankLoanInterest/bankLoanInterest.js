import { LightningElement } from 'lwc';

export default class BankLoanInterest extends LightningElement {

    loanResult;
    principal;
    rateOfInterest;
    noOfYears;

    principalChangeHandler(event){
        this.principal = parseInt(event.target.value);
    }

    durationChangeHandler(event){
        this.noOfYears = parseInt(event.target.value);
    }

    rateChangeHandler(event){
        this.rateOfInterest = parseInt(event.target.value);
    }

    calculateLoanAmountHandler(event){
        this.loanResult = 'The Loan Interest is =' +(this.principal * this.rateOfInterest * this.noOfYears) / 100;
    }
}