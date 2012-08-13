var Card = require("./Card.js").Card

exports.Deck = function () {
    this.cards = [];
    ;["Hearts", "Clubs", "Spades", "Diamonds"].forEach(function (aSuit) {
        for (var aNumber = 2; aNumber <= 14; aNumber++) {
            this.cards.push(new Card(aNumber, aSuit));
        }
    }.bind(this));
    
    this.shuffle();
}

exports.Deck.prototype = {
    shuffle: (function(){
        function shuffleDeck() {
            return (Math.round(Math.random()) - 0.5);
        }
        return function () {
            this.cards.sort(shuffleDeck);
        }
    }()),
    passCards: function(arrayOfPlayers){
        if(this.cards.length % arrayOfPlayers.length !== 0){
            throw "The cards can't be divided equally to all players";
        }
        
        var numberOfCardsForEachPlayer = this.cards.length/arrayOfPlayers.length;
        for(var i=0;i<arrayOfPlayers.length;i++){
            arrayOfPlayers[i].receiveCards( this.cards.slice(i*numberOfCardsForEachPlayer, i*numberOfCardsForEachPlayer+numberOfCardsForEachPlayer) );
        }
        
    }
}