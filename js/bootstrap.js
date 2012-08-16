;(function(){

	var loadScript = function(url){
		return $.ajax({ url: "js/" + url + ".js", dataType: "script", crossDomain: true })
	}
	
	$.when(
		loadScript("NotificationCenter"),
		loadScript("AppController"),
		loadScript("Player"),
		loadScript("Card"),
		loadScript("BattlementStack"),
		loadScript("GarrisonStack")
	).done(function(){
    	AppController.initialized();
		console.log("All scripts have been loaded.")
	});

}());