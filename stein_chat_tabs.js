javascript: (function(e, s) {
	e.src = s;
	e.onload = function($) {
		(function($) {
			jQuery.noConflict();
			//Load our custom CSS/HTML
			var cssPath = "https://steinpyre.github.io/Stein-Plugin/assets/stein_plugin.css";
			if (!$("link[href='"+cssPath+"']").length) $('<link href="'+cssPath+'" rel="stylesheet">').appendTo("head");
			$("<div id='stein-chat-tab-container'>"+
			  "<div class='stein-chat-tab active' data-target='all'>All</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-service'>Service</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-zone'>Zone</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-party'>Party</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-whisper'>Whisper</div>"+
			"</div>").prependTo("#stein-chat-container");
			//Setup tab click events
			$(document).on("click", ".stein-chat-tab", function(e){
				$(".stein-chat-tab").removeClass("active");
				$(this).addClass("active");
				var target = $(this).attr("data-target");
				$("#stein-chat-content li").hide();
				if($(this).attr("data-target") != "all"){
					$("#stein-chat-content li."+target).show();
				} else {
					$("#stein-chat-content li").show();
				}
				//Scroll to bottom on tab click
				var objDiv = document.getElementById("stein-chat-container-content");
				objDiv.scrollTop = objDiv.scrollHeight;
			});
			// Setup listener
			var target = $( "#stein-chat-content" )[0];
			var observer = new MutationObserver(function( mutations ) {
				mutations.forEach(function( mutation ) {
					var newNodes = mutation.addedNodes;
					if( newNodes !== null ){
						var nodes = $(newNodes);
						//Hide new messages based on current tab selection
						nodes.each(function(){
							var target = $(".stein-chat-tab.active").attr("data-target");
							if(target != "all"){
								if(!$(this).hasClass(target)) $(this).hide();
							}
						});
					}
				});
			});
			var config = {
				attributes: true,
				childList: true,
				characterData: true
			};
			//Start listening
			observer.observe(target, config);
			console.log("stein_chat_tabs.js: Script loaded");
		})(jQuery);
	};
	document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');