var io = require('socket.io').listen(8765);

var NotificationCenter = require("./NotificationCenter.js");
var Deck = require("./Deck.js").Deck;
var Player = require("./Player.js").Player;


var deck = new Deck();

var player1 = new Player("Player one");
var player2 = new Player("Player two");

deck.passCards([player1, player2]);


player1.seperateCardsToColumns(5);

player2.seperateCardsToColumns(5);

console.log("\n"+player1.name);
console.log(player1.toString());

console.log("\n"+player2.name);
console.log(player2.toString());