;(function(){

	var loadScript = function(url){
		return $.ajax({ url: "js/" + url + ".js", dataType: "script", crossDomain: true })
	}
	
	$.when(
		loadScript("NotificationCenter")
	).done(function(){
		console.log("All scripts have been loaded.")
	});

}());