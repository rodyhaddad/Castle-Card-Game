var io = require('socket.io').listen(8765);

var Player = require("./Player.js").Player;
var Lobby = require("./Lobby.js").Lobby;

var lobby = new Lobby();

io.sockets.on('connection', function (socket) {
    var aPlayer = new Player("Player");
    
    aPlayer.socket = socket;
    
    socket.emit('NotificationCenter', {
        namespace: "Player",
        event: "setPlayerUid",
        args: {
            uid: aPlayer.uid
        }
    });
    
    lobby.addPlayer(aPlayer);
    
    /*socket.on("NotificationCenter", function(data){
    	NotificationCenter.triggerEvent(data.namespace, data.event, data.args);
	});*/
});


/*var deck = new Deck();

var player1 = new Player("Player one");
var player2 = new Player("Player two");

deck.passCards([player1, player2]);
player1.setOpponentPlayer(player2)


player1.seperateCardsToColumns(5);

player2.seperateCardsToColumns(5);

console.log("\n"+player1.name);
console.log(player1.toString());

console.log("\n"+player2.name);
console.log(player2.toString());*/