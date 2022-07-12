({
	myAction : function(component) {
        	var vFirstName = component.find("Fname").get("v.value");
			var vLastName = component.find("Lname").get("v.value");
        	var vAge = component.find("Vage").get("v.value");
				
        	var outputNameElement = component.find("NameToDisplay");
        	outputNameElement.set("v.value", 'Outlook name ::' + vLastName+','+vFirstName+','+vAge);
		
	}
})