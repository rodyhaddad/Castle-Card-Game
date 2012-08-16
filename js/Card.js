/*
    number => (Number) from 2, 14
    suit   => (String) either Hearts, Clubs, Spades, Diamonds
*/
var Card = function(number, suit){
    if(number && suit && number >= 2 && number <= 14 && ["Hearts", "Clubs", "Spades", "Diamonds"].indexOf(suit) !== -1){
        this.number = number;
        this.suit = suit;
        this.shown = false;
    }else{
        throw "Invalid Card trying to be created. Number: " + number + " Suit: " + suit;
    }
};

Card.prototype = {
    setAsShown: function(){
        this.shown = true;
    },
    setAsHidden: function(){
        this.shown = false;
    },
    
	toString: function(){
    	return this.number + " of " + this.suit;
	},
	
	returnElement: function(parent){
		var elem = document.createElement('div');
		var cardIndex = parent.getCardIndex(this);
		if(cardIndex === 0){
			$(elem).addClass("cardContainer topCard").css({bottom: ((parent.getCardAmount()-cardIndex)*10)});
		}else{
		    $(elem).addClass("cardContainer").css({bottom: ((parent.getCardAmount()-cardIndex)*10), zIndex: (0-cardIndex)});
		}
		if(this.shown === true){
			$(elem).addClass("faceUp");
		}else{
		    $(elem).addClass("faceDown");
		}
		elem.innerHTML = "<div class='card'>\
                				<div class='front " + this.suit + " card" + this.number + "'></div>\
                			    <div class='back'></div>\
            			    </div>";
        return elem;
	}
}