var Column = function(someCards){
    this.battlementStack = new Stack( [someCards.pop()] );
    this.garrisonStack = new Stack(someCards);
}

Column.prototype = {
	addCards: function(someCards){
    	this.garrisonStack.addCards(someCards);
	}
}