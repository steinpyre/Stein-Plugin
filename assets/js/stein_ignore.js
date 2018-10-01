//Define users in your ignore list here
//Case insensitive
//Ex: Adding "annoyingName" will ignore player "aNnOyInGnAmE"
var ignoreList = [
    "username1",
    "username2",
];
var upperCaseIgnoreList = ignoreList.map(function(value) {
	return value.toUpperCase();
});
(function($) {
	jQuery.noConflict();
	//Create button
	$('<div class="stein-toggle-button" id="stein-plugin-menu-toggle-button"></div>').appendTo("#stein-shortcuts-button-container");
	//Create window
	$("<div id='stein-plugin-window-frame'>"+
	  "Coming soon..."+
	  "</div>").prependTo("#stein-window-container-left-hidden");
	$(document).on("click", "#stein-plugin-menu-toggle-button", function(e){
		if($("#stein-window-container-left-hidden #stein-plugin-window-frame").length){
			$("#stein-plugin-window-frame").remove().appendTo("#stein-window-container-left");
		} else {
			$("#stein-plugin-window-frame").remove().appendTo("#stein-window-container-left-hidden");
		}
	});
	hideMessages();
	$("#stein-chat-content").on('DOMNodeInserted', function(e){
		hideMessages();
	});
	function hideMessages(){
		$(".stein-chat-message-zone").each(function(index, value){
			var name = $(this).find(".stein-chat-message-zone-name").html();
			if(upperCaseIgnoreList.indexOf(name.toUpperCase()) != -1){
				$(this).remove();
				//console.log("stein_ignore.js: Message from "+name+" removed.");
			}
		});
	}
	console.log("stein_ignore.js: Script loaded");
})(jQuery);
	