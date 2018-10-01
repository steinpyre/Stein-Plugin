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
	
	//Create window
	var nDiv = $('<div class="stein-window-frame-content" id="stein-hub-frame-ignore">'+
					'<div class="stein-shop-entry-title-info">Ignore List</div>'+
					'<div class="stein-hub-ignore-list">'+
						'Add Ignore: <input type="text" id="stein-hub-ignore-list-add-name">'+
						'<button id="stein-hub-ignore-list-add">+</button>'+
						'<span id="stein-hub-ignore-list-count">1/10</span>'+
						'<div id="stein-hub-ignore-list-list">'+
						'</div>'+
					'</div>'+
				  "</div>");
	nDiv.insertAfter("#stein-hub-frame-friends");
	
	rebuildIgnoreList();
	hideMessages();
	
	$(document).on("click tap", "#stein-hub-ignore-list-add", function(e){
		var exists = false;
		var name = $("#stein-hub-ignore-list-add-name").val();
		$("#stein-hub-ignore-list-add-name").val("");
		for (var i=ignoreList.length-1; i>=0; i--){
			if (ignoreList[i] === name){
				exists = true;
			}
		}
		if(!exists){
			ignoreList.push(name);
			upperCaseIgnoreList = ignoreList.map(function(value) {
				return value.toUpperCase();
			});
			rebuildIgnoreList();
			hideMessages();
		}
	});
	
	$(document).on("click tap", "#stein-hub-ignore-list-list .friend-list-entry-options", function(e){
		var name = $(this).siblings(".friend-list-entry-name").text();
		$(this).parents(".stein-hub-friend-list-entry").remove();
		for (var i=ignoreList.length-1; i>=0; i--){
			if (ignoreList[i] === name){
				ignoreList.splice(i, 1);
			}
		}
		upperCaseIgnoreList = ignoreList.map(function(value) {
			return value.toUpperCase();
		});
	});
	
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
	function rebuildIgnoreList(){
		upperCaseIgnoreList = ignoreList.map(function(value) {
			return value.toUpperCase();
		});
		$("#stein-hub-ignore-list-list").empty();
		//Create entries
		var nnDiv = "";
		for(var i=0; i<ignoreList.length; i++){
			var cName = ignoreList[i];
			nnDiv += '<div class="stein-hub-friend-list-entry">'+
				'<button class="friend-list-entry-options"><img src="/assets/images/icon_trash.png"/></button>'+
				'<span class="friend-list-entry-name">'+cName+'</span>'+
			'</div>';
		}
		$(nnDiv).appendTo($("#stein-hub-ignore-list-list"));
	}
	console.log("stein_ignore.js: Script loaded");
})(jQuery);
	