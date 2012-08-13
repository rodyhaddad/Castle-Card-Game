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
	toString: function(){
    	return this.cards.join(", ");
	}
}