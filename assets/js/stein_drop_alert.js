(function($) {
	jQuery.noConflict();
	console.log("stein_dropalert.js: Script loaded");
	var target = $( "body" )[0];
	var observer = new MutationObserver(function( mutations ) {
		mutations.forEach(function( mutation ) {
			var newNodes = mutation.addedNodes;
			if( newNodes !== null ) {
				var nodes = $(newNodes);
				nodes.each(function() {
					var node = $(this);
					if(node.hasClass("stein-dropped-item-container")){
						console.log("stein_dropalert.js: Item dropped");
					}
				});
			}
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