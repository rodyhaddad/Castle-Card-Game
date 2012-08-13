// NotificationCenter: This object assigns handlers to various events.

var NotificationCenter = (function(){
	var handlers = {};
	return {
		addListener: function(anEvent, aHandler, aNamespace){ // Assigns a handler to a certain event
			if(typeof handlers[aNamespace] === "undefined"){
				handlers[aNamespace] = {};
			}
			if(typeof handlers[aNamespace][anEvent] === "undefined"){
				handlers[aNamespace][anEvent] = {};
			}
			handlers[aNamespace][anEvent].push(aHandler);
		},		
		triggerEvent: function(anEvent, args, aNamespace){	// Execute the handler associated to the triggered event	
			if(typeof handlers[aNamespace] !== "undefined" && typeof handlers[aNamespace][anEvent] !== "undefined"){
				handlers[aNamespace][anEvent].foreach(function(aHandler){
					aHandler(args);
				});
			}
		}
	};	
}());