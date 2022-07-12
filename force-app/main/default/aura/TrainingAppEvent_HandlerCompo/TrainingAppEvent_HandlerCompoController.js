({
	handleApplicationEvent : function(component, event) {
		var VarMessage = event.getParam("BusinessData");
        
        //set handler attribute based on event data
        component.set("v.messageFromEvent", VarMessage);
        
        var numEventsHandled = parseInt(component.get("v.numEvents")) + 1;
        component.set("v.numEvents", numEventsHandled);
	}
})