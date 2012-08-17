var BattlementStack = function(aBattlement, aDefender){	
	if(typeof aBattlement !== "undefined"){
    	this.battlementCard = aBattlement;
    }else{
    	this.battlementCard = null;
    }
    if(typeof aDefender !== "undefined"){
    	this.defenderCard = aDefender;
    	this.defenderCard.setAsShown();
    }else{
    	this.defenderCard = null;
    }
}

BattlementStack.prototype = {

	getCardIndex: function(aCard){
		if(Boolean(this.defenderCard)){
			return [this.defenderCard, this.battlementCard].indexOf(aCard);
		}else{
	    	return [this.battlementCard].indexOf(aCard);
	    }
	},
	getCardAmount: function(){
		if(Boolean(this.defenderCard)){
			return 2;
		}else if(Boolean(this.battlementCard)){
	    	return 1;
	    }else{
	    	return 0;
	    }
	},
	
	setBattlement: function(aCard){
		if(!this.battlementCard){
			this.battlementCard = aCard;
		}else{
			throw "There is already a battlement in this battlement stack"
		}
	},
	getBattlement: function(){
		return this.battlementCard;
	},
	
	setDefender: function(aCard){
		if(!this.defenderCard){
			this.defenderCard = aCard;
			this.defenderCard.setAsShown();
		}else{
			throw "There is already a defender in this battlement stack"
		}
	},
	getDefender: function(){
		return this.defenderCard;
	},
	
    generateElement: function(){
		var elem = document.createElement('div');
		$(elem).addClass("stack battlement");
		if(this.battlementCard){
    	    $(elem).append(this.battlementCard.returnElement(this));
    	}
    	if(this.defenderCard){
    	    $(elem).append(this.defenderCard.returnElement(this));
    	}
        return elem;
	}
}