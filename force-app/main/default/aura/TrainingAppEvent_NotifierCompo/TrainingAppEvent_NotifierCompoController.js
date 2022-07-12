({
    fireApplicationEvent : function(Component, event) {
        
        //get the application event by using the e.c.<event>
        var varAppEvent = $A.get("e.c:MyApplicationEvent");
        
        varAppEvent.setParams({
            "BusinessData" : "An application event fired. " });
        
        varAppEvent.fire();
            
       
    }
		
	
})