({
	getOutlookName : function(component) {
        	var vFirstName = component.find("Fname").get("v.value");
			var vLastName = component.find("Lname").get("v.value");
        	var vPrefix = component.find("Pname").get("v.value");
				
        	var outputNameElement = component.find("NameToDisplay");
        
        outputNameElement.set("v.value", 'Outlook name ::' + vPrefix+','+ vLastName+','+vFirstName);
		
	}
})