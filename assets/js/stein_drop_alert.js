var alert = new Audio("https://steinpyre.github.io/Stein-Plugin/assets/mp3/alert_ping.mp3");
alert.volume = 0.2;
//alert.play();

var nDiv = $('<div class="stein-window-frame-content" id="stein-options-frame-dropalerts">'+
				'<div class="stein-window-frame-content-header">Drop Alerts</div>'+
				'<input type="checkbox" id="stein-options-drop-alert-common" style="display: none;">'+
				'<label for="stein-stein-options-drop-alert-common" class="checkbox-label"></label>'+
				'<span style="font-size: 18px;">Common</span>'+
				'<br>'+
				'<input type="checkbox" id="stein-options-drop-alert-uncommon" style="display: none;">'+
				'<label for="stein-options-drop-alert-uncommon" class="checkbox-label"></label>'+
				'<span style="font-size: 18px;">Uncommon</span>'+
				'<br>'+
				'<input type="checkbox" id="stein-options-drop-alert-rare" style="display: none;">'+
				'<label for="stein-options-drop-alert-rare" class="checkbox-label"></label>'+
				'<span style="font-size: 18px;">Rare</span>'+
				'<br>'+
				'<input type="checkbox" id="stein-options-drop-alert-epic" style="display: none;">'+
				'<label for="stein-options-drop-alert-epic" class="checkbox-label"></label>'+
				'<span style="font-size: 18px;">Epic</span>'+
				'<br>'+
				'<input type="checkbox" id="stein-options-drop-alert-legendary" style="display: none;">'+
				'<label for="stein-options-sound-effect-muted" class="checkbox-label"></label>'+
				'<span style="font-size: 18px;">Legendary</span>'+
			'</div>');
nDiv.insertAfter("#stein-options-frame-sound");


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
						var childNode = node.find(".stein-dropped-item").eq(0);
						//if(childNode.hasClass("stein-dropped-item-common")) _playAlert = true;
						//if(childNode.hasClass("stein-dropped-item-uncommon")) _playAlert = true;
						if(childNode.hasClass("stein-dropped-item-rare")) _playAlert = true;
						if(childNode.hasClass("stein-dropped-item-epic")) _playAlert = true;
						if(childNode.hasClass("stein-dropped-item-legendary")) _playAlert = true;
						//console.log("stein_dropalert.js: Item dropped");
					}
				});
			}
			if(_playAlert) alert.play();
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