// NotificationCenter: This object assigns handlers to various events.

var handlers = {};

exports.addListener = function(aNamespace, anEvent, aHandler){ // Assigns a handler to a certain event
   if(typeof handlers[aNamespace] === "undefined"){
	   handlers[aNamespace] = {};
   }
   if(typeof handlers[aNamespace][anEvent] === "undefined"){
	   handlers[aNamespace][anEvent] = [];
   }
   handlers[aNamespace][anEvent].push(aHandler);
};

exports.triggerEvent = function(aNamespace, anEvent, args){	// Execute the handler associated to the triggered event	
   if(typeof handlers[aNamespace] !== "undefined" && typeof handlers[aNamespace][anEvent] !== "undefined"){
	   handlers[aNamespace][anEvent].forEach(function(aHandler){
		   aHandler(args);
	   });
   }
};