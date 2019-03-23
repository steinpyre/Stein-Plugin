var alert = new Audio("https://steinpyre.github.io/Stein-Plugin/assets/mp3/alert_ping.mp3");
alert.volume = 0.3;
//alert.play();
(function($) {
	jQuery.noConflict();
	console.log("stein_dropalert.js: Script loaded");
	var target = $( "body" )[0];
	var observer = new MutationObserver(function( mutations ) {
		mutations.forEach(function( mutation ) {
			var newNodes = mutation.addedNodes;
			var _playAlert = false;
			if( newNodes !== null ) {
				var nodes = $(newNodes);
				nodes.each(function() {
					var node = $(this);
					if(node.hasClass("stein-dropped-item-container")){
						_playAlert = true;
						/*
						var childNode = node.find(".stein-dropped-item");
						if(childNode.hasClass("stein-dropped-item-common"));
						if(childNode.hasClass("stein-dropped-item-uncommon"));
						if(childNode.hasClass("stein-dropped-item-rare"));
						if(childNode.hasClass("stein-dropped-item-epic"));
						if(childNode.hasClass("stein-dropped-item-legendary"));
						*/
						//console.log("stein_dropalert.js: Item dropped");
					}
				});
			}
			if(playAlert) alert.play();
		});
	});
	// Configuration of the observer:
	var config = {
		attributes: true,
		childList: true,
		characterData: true
	};
	observer.observe(target, config);
	//observer.disconnect();
})(jQuery);