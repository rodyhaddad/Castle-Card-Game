// NotificationCenter: This object assigns handlers to various events.

var NotificationCenter = (function(){
	var handlers = {};
	
	var socket = io.connect('http://localhost:8765');
	
	socket.on("NotificationCenter", function(data){
    	NotificationCenter.triggerEvent(data.namespace, data.event, data.args);
	});
	
	Function.prototype.addAsObserver = function(aNamespace, anEvent){
    	NotificationCenter.addListener(aNamespace, anEvent, this);
    	return this;
	}
	
	return {
		addListener: function(aNamespace, anEvent, aHandler){ // Assigns a handler to a certain event
			if(typeof handlers[aNamespace] === "undefined"){
				handlers[aNamespace] = {};
			}
			if(typeof handlers[aNamespace][anEvent] === "undefined"){
				handlers[aNamespace][anEvent] = [];
			}
			handlers[aNamespace][anEvent].push(aHandler);
		},		
		triggerEvent: function(aNamespace, anEvent, args){	// Execute the handler associated to the triggered event	
    		console.log(arguments);
			if(typeof handlers[aNamespace] !== "undefined" && typeof handlers[aNamespace][anEvent] !== "undefined"){
				handlers[aNamespace][anEvent].forEach(function(aHandler){
					aHandler(args);
				});
			}
		}
	};	
}());