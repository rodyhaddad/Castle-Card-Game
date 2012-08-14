var Game = require("./Game.js").Game;

exports.Lobby = function(name){
    
}

exports.Lobby.prototype = {
    lonelyPlayers: [],
	addPlayer: function(aPlayer){
    	if(this.lonelyPlayers.length > 0){
        	var opponentPlayer = this.lonelyPlayers.pop();
        	
        	opponentPlayer.setName("Player 1");
        	aPlayer.setName("Player 2");
        	
        	aPlayer.setOpponentPlayer(opponentPlayer);
        	
        	var newGame = new Game();
        	
        	opponentPlayer.game = newGame;
        	aPlayer.game = newGame;
        	
        	newGame.start(opponentPlayer, aPlayer);
    	}else{
        	this.lonelyPlayers.push(aPlayer);
    	}
	}
}