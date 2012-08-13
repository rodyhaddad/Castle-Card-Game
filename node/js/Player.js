var Column = require("./Column.js").Column;

exports.Player = function(name){
    this.name = name;
    this.cards = [];
    this.columns = [];
}

exports.Player.prototype = {
	receiveCard: function(aCard){
    	this.cards.push(aCard);
	},
	receiveCards: function(receivedCards){
    	receivedCards.forEach(function(aCard){
        	this.receiveCard(aCard);
    	}.bind(this))
	},
	seperateCardsToColumns: function(numberOfColumns){
    	var cardsPerColumn = Math.floor(this.cards.length / numberOfColumns);
    	
    	for(var i=0;i<numberOfColumns;i++){
            this.columns.push( new Column( this.cards.slice(i*cardsPerColumn, i*cardsPerColumn+cardsPerColumn) ) );
            //console.log("DEBUG", "from ", i*cardsPerColumn, " to " , i*cardsPerColumn+cardsPerColumn);
        }
        i--;
        
        if((i*numberOfColumns+numberOfColumns) < this.cards.length){
            this.columns[ Math.ceil((numberOfColumns-1)/2)  ].addCards(this.cards.slice(i*cardsPerColumn+cardsPerColumn, this.length));
        }
        
	},
	
	toString: function(){
    	var string = "";
    	
    	
    	for(var i=0;i<this.columns.length;i++){
        	string += "Column "+i+"\n";
        	string += this.columns[i].toString() + "\n";
    	}

    	return string;
	}
}