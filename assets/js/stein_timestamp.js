javascript: (function(e, s) {
	e.src = s;
	e.onload = function() {
		(function($) {
			jQuery.noConflict();
			console.log("stein_timestamp.js: Script loaded");
			// The node to be monitored
			var target = $( "#stein-chat-content" )[0];
			// Create an observer instance
			var observer = new MutationObserver(function( mutations ) {
				mutations.forEach(function( mutation ) {
					var newNodes = mutation.addedNodes; // DOM NodeList
					if( newNodes !== null ) { // If there are new nodes added
						var nodes = $(newNodes); // jQuery set
						nodes.each(function() {
							var d = new Date();
							var node = $(this);
							var tsString = "["+d.getHours()+":"+("0" + d.getMinutes()).slice(-2)+"]";
							if(node.find(".stein-chat-message-zone-zone").length != 0){
								node.find(".stein-chat-message-zone-zone").html(tsString+node.find(".stein-chat-message-zone-zone").html());
							} else {
								node.html("<span class='stein-message-timestamp'>["+d.getHours()+":"+("0" + d.getMinutes()).slice(-2)+"]</span>"+node.html());
							}
							//console.log(node);
							//$("<span class='stein-chat-message-timestamp'>["+d.getHours()+":"+("0" + d.getMinutes()).slice(-2)+"]</span>").insertBefore(node);
							//node.html("<span class='stein-message-timestamp'>["+d.getHours()+":"+("0" + d.getMinutes()).slice(-2)+"]</span>"+node.html());
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
	};
	document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');