// NotificationCenter: This object assigns handlers to various events.

exports.NotificationCenter = function(game){
    this.game = game;
    this.handlers = {};
}

exports.NotificationCenter.prototype = {
    addListener: function(aNamespace, anEvent, aHandler){ // Assigns a handler to a certain event
        if(typeof this.handlers[aNamespace] === "undefined"){
           this.handlers[aNamespace] = {};
        }
        if(typeof this.handlers[aNamespace][anEvent] === "undefined"){
           this.handlers[aNamespace][anEvent] = [];
        }
        this.handlers[aNamespace][anEvent].push(aHandler);
    },
    triggerEvent: function(aNamespace, anEvent, args){	// Execute the handler associated to the triggered event	
       if(typeof this.handlers[aNamespace] !== "undefined" && typeof this.handlers[aNamespace][anEvent] !== "undefined"){
    	   this.handlers[aNamespace][anEvent].forEach(function(aHandler){
    		   aHandler(args);
    	   });
       }
       
       if(this.game.player1 && this.game.player1.socket){
           this.game.player1.socket.emit('NotificationCenter', {
               namespace: aNamespace,
               event: anEvent,
               args: args
           });
       }
       
       if(this.game.player2 && this.game.player2.socket){
           this.game.player2.socket.emit('NotificationCenter', {
               namespace: aNamespace,
               event: anEvent,
               args: args
           });
       }
       
    }
};