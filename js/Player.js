var Player = function(){
    this.name = name;
    this.cards = [];
    this.columns = [];
    this.opponentPlayer = null;
    
    this.uid = Math.UID();
    while(players.hasOwnProperty(this.uid)){
        this.uid = Math.UID();
    }
    
    players[this.uid] = this;
}

Player.prototype = {
    setName: function(aName){
        this.name = aName;
    },
    
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
        }
        i--;
        
        if((i*numberOfColumns+numberOfColumns) < this.cards.length){
            this.columns[ Math.ceil((numberOfColumns-1)/2)  ].addCards(this.cards.slice(i*cardsPerColumn+cardsPerColumn, this.length));
        }
        
	},
	
	setOpponentPlayer: function(aPlayer, setForOtherPlayer){
    	this.opponentPlayer = aPlayer;
    	if(!setForOtherPlayer){
    	   aPlayer.setOpponentPlayer(this, true);
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