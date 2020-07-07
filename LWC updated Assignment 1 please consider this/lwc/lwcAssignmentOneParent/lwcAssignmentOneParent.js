import { LightningElement,track,api } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountController.getAccountRecords';
export default class LwcAssignmentOneParent extends LightningElement {

    @track accounts;
    @track error;
    @track accountNamePhrase;
    @track numberOfRecords;
    @track filterText;
    @track copiedAccounts;
    
    
    handleNameChange(event){
    this.accountNamePhrase  =   event.target.value;

   }
  
   handleCountRecords(event){
    this.numberOfRecords  =  event.target.value;
   }
   
   searchAccounts(event){        
        // Calling apex method by passing the parameters 
        getAccountRecords({accountNamePhrase: this.accountNamePhrase , numberOfRecords: this.numberOfRecords} )
            .then(result => {
                this.accounts = result; this.copiedAccounts= [...this.accounts];
                console.log('Server method called',+ result)
            })
            .catch(error => {
                this.error=error;
            });
    }

    //Filter the Records from the Main Account List  
    filterAccounts(event){
        this.filterText= event.target.value;
        this.copiedAccounts = this.accounts.filter(tempAcc => tempAcc.Name.toLowerCase().includes(this.filterText.toLowerCase()));
    }


}