javascript: (function(e, s) {
	e.src = s;
	e.onload = function($) {
		(function($) {
			jQuery.noConflict();
			console.log("stein_chat_tabs.js: Script loaded");
			$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://steinpyre.github.io/Stein-Plugin/stein_plugin.css') );
			$("<div id='stein-chat-tab-container'>"+
			  "<div class='stein-chat-tab active' data-target='all'>All</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-service'>Service</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-zone'>Zone</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-party'>Party</div>"+
			  "<div class='stein-chat-tab' data-target='stein-chat-message-whisper'>Whisper</div>"+
			  "</div>").prependTo("#stein-chat-container");
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
			});
		})(jQuery);
	};
	document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');