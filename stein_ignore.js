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
javascript: (function(e, s) {
	e.src = s;
	e.onload = function($) {
		(function($) {
			jQuery.noConflict();
			console.log("stein_ignore.js: Script loaded");
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
		})(jQuery);
	};
	document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');