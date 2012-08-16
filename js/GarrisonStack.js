var GarrisonStack = function(someCards){
    this.cards = someCards;
}

GarrisonStack.prototype = {
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
	},
	getCardIndex: function(aCard){
	    return this.cards.indexOf(aCard);
	},
	getCardAmount: function(){
		return this.cards.length;
	},
    returnElement: function(){
		var elem = document.createElement('div');
		$(elem).addClass("stack garrison");
		var that = this;
		this.cards.forEach(function(aCard){
			$(elem).append(aCard.returnElement(that));
		});
        return elem;
	}
}