;(function(){
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	var radix = chars.length;
	Math.UID = function(){
		var uid = [];
		for(i=0;i<32;i++){
			uid.push(chars[0 | Math.random()*radix]);
		}
		return uid.join("");
	}
}());