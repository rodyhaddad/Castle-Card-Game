var Deck = require("./Deck.js").Deck;
var NotificationCenter = require("./NotificationCenter.js").NotificationCenter;

exports.Game = function () {
    this.NotificationCenter = new NotificationCenter(this);
}

exports.Game.prototype = {
    start: function(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        
        
        player1.game = this;
        player2.game = this;
        
        this.deck = new Deck();
        
        this.deck.passCards([player1, player2]);
        
        player1.seperateCardsToColumns(5);

        player2.seperateCardsToColumns(5);
        
        
        this.NotificationCenter.triggerEvent("Game", "started", {
            player1: player1.uid,
            player2: player2.uid,
        });
        
    }
}