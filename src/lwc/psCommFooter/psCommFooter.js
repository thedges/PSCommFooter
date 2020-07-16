import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import getConfig from '@salesforce/apex/PSCommFooterController.getConfig';

export default class PsCommFooter extends LightningElement {
    @api templateName;
    @api configName = 'Troy Test';
    config;

    get isUSWDS() {
        return (this.config && this.templateName.startsWith('USWDS') ? true : false);
    }

    get isUSWDSBig() {
        return (this.config && this.templateName == 'USWDS Big' ? true : false);
    }

    get isUSWDSDefault() {
        return (this.config && this.templateName == 'USWDS Default' ? true : false);
    }

    get isUSWDSSlim() {
        return (this.config && this.templateName == 'USWDS Slim' ? true : false);
    }

    get isConfig() {
        return (this.config ? true : false);
    }

    connectedCallback() {
        var self = this;

        getConfig({configName: this.configName})
        .then(result => {
           console.log('result=' + result);
           self.config = JSON.parse(result);
        })
        .catch (error => {
           self.handleError(error);
        });
    }

    handleError (err) {
        console.log ('error=' + err);
        console.log ('type=' + typeof err);
    
        this.showSpinner = false;
    
        const event = new ShowToastEvent ({
          title: err.statusText,
          message: err.body.message,
          variant: 'error',
          mode: 'pester',
        });
        this.dispatchEvent (event);
      }
}