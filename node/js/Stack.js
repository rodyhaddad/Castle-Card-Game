exports.Stack = function(someCards){
    this.cards = someCards
}

exports.Stack.prototype = {
	addCards: function(someCards){
    	this.cards = this.cards.concat(someCards);
	},
	showTop: function(){
    	this.cards[0].setAsShown();
	},
	hideTop: function(){
    	this.cards[0].setAsHidden();
	},
	
	toObject: function(){
    	return this.cards.map(function(aCard){
        	return aCard.toObject();
    	});
	},
	toString: function(){
    	return this.cards.join(", ");
	}
}