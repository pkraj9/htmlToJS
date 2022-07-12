({
	CreateClient : function(component, event, helper) {
        
        //for logs
        console.log('In Create Record function');
        
        //getting the candidate info
        var varClient = component.get("v.Attrclient");
        
        //validation
        if($A.util.isEmpty(varClient.Name) || $A.util.isUndefined(varClient.Name)){
            alert('First Name is Required');
        	return;
        }
        
        if($A.util.isEmpty(varClient.Last_Name__c) || $A.util.isUndefined(varClient.Last_Name__c)){
            alert('Last name is required');
        	return;
        }
        
        helper.helperMethod(varClient);
        
      
        
     }
})