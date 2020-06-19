import { LightningElement, track,api } from 'lwc';

import getAccountList   from '@salesforce/apex/AccountController.getAccountList';

export default class LwcFirstAssignment extends LightningElement {

@track searchkey;
@track recordNumber;
@track myAccounts;
@track copiedAccounts;
@track error;


handleInput(event){
    if(event.target.name == 'Name'){
        this.searchkey =event.target.value;
    }else if(event.target.name == 'RecordNumber'){ 
        this.recordNumber =event.target.value;
    }else if(event.target.name == 'searchFilterText'){ 
    this.filterDataoperation =(event.target.value);  
}
}

handleSearchOperation(){
    getAccountList({searchkey: this.searchkey, recordNumber: this.recordNumber})
    .then(result => {this.myAccounts = result; this.copiedAccounts = [...this.myAccounts];
    })    
    .catch(error => this.error =error);
    console.log(copiedAccounts);
}

filterDataoperation(filterText){
    this.copiedAccounts = this.myAccounts.filter((acc) => acc.Name.toLowerCase().includes(filterText.toLowerCase()));
}
}