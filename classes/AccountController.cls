public  class AccountController {
    
    @AuraEnabled(Cacheable = true)
    public static list<Account> getAccountList(String searchkey, Integer recordNumber) {
        string searchTerm = '%' + searchkey + '%';
        
        list<Account> lstAccs = [SELECT  Id,AccountNumber,Active__c,CreatedBy.Name,Rating,
                                 Name,industry From Account WHERE Name LIKE :searchTerm Limit:recordNumber];
               
        return lstAccs; 
    }
}