import { LightningElement } from 'lwc';

import MyImageReference from '@salesforce/resourceUrl/NewLogo';

export default class StaticResource extends LightningElement {

    logo=MyImageReference;
}