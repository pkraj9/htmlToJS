({
	fireComponentEvent : function(component, event) {
        
        //get the component event by using the 'name' from aura:registerEvent
        
        var varCmpEvent = component.getEvent("cmpEventName");
        varCmpEvent.setParams({
            	"message" : "this message is passed by component event!!"
            });
		varCmpEvent.fire();        
		}
})