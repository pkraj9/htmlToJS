({
	handleComponentEvent : function(component, event) {
		var varMessage = event.getParam("message");
        
        //set data we got from event to handler compo attribute
        component.set("v.messageFromEvent", varMessage);
        
        //this is a regular way of doing counting in lightning component
        var varNumEventsHandled = parseInt(component.get("v.numOfEventsCalled")) + 1;
        component.set("v.numOfEventsCalled", varNumEventsHandled);
	}
})