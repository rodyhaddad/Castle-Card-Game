/*
    number => (Number) from 2, 14
    suit   => (String) either Hearts, Clubs, Spades, Diamonds
*/
exports.Card = function(number, suit){
    if(number && suit && number >= 2 && number <= 14 && ["Hearts", "Clubs", "Spades", "Diamonds"].indexOf(suit) !== -1){
        this.number = number;
        this.suit = suit;
        this.shown = false;
    }else{
        throw "Invalid Card trying to be created. Number: " + number + " Suit: " + suit;
    }
}

exports.Card.prototype = {
    setAsShown: function(){
        this.shown = true;
    },
    setAsHidden: function(){
        this.shown.false;
    },
	toString: function(){
    	return this.number + " of " + this.suit;
	}
}