var Column = function(someCards){
    this.battlementStack = new BattlementStack( [someCards.pop()] );
    this.garrisonStack = new GarrisonStack(someCards);
}

Column.prototype = {
	addCards: function(someCards){
    	this.garrisonStack.addCards(someCards);
	}
}