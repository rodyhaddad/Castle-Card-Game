var Stack = require("./Stack.js").Stack;

exports.Column = function(someCards){
    this.battlementStack = new Stack( [someCards.pop()] );
    this.garrisonStack = new Stack(someCards);
}

exports.Column.prototype = {
	addCards: function(someCards){
    	this.garrisonStack.addCards(someCards);
	},
	
	toObject: function(){
    	return {
        	battlementStack: this.battlementStack.toObject(),
        	garrisonStack: this.garrisonStack.toObject()
    	}
	},
	toString: function(){
    	return "battlement: "+ this.battlementStack.toString() + "\ngarrison: " + this.garrisonStack.toString()
	}
}