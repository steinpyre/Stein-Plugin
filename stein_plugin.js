function loadScript(url, callback){
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var cssPath = "https://steinpyre.github.io/Stein-Plugin/assets/css/stein_plugin.css";
loadScript("//code.jquery.com/jquery-latest.min.js", function(){
	//alert("jquery loaded");
	(function($) {
		loadScript("https://steinpyre.github.io/Stein-Plugin/vendors/cookie_js/js.cookie.min.js", function(){});
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_chat_tabs.js", function(){});
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_ignore.js", function(){});
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_timestamp.js", function(){});
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_drop_alert.js", function(){});
		//alert("scripts loaded");
		if (!$("link[href='"+cssPath+"']").length) $('<link href="'+cssPath+'" rel="stylesheet">').appendTo("head");
	})(jQuery);
});