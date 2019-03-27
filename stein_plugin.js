/*
function loadScript(url, callback){
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
	
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var cssPath = "https://steinpyre.github.io/Stein-Plugin/assets/css/stein_plugin.css";
loadScript("//code.jquery.com/jquery-latest.min.js", function(){
	//alert("jquery loaded");
	(function($) {
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_chat_tabs.js", function(){});
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_ignore.js", function(){});
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_timestamp.js", function(){});
		loadScript("https://steinpyre.github.io/Stein-Plugin/assets/js/stein_drop_alert.js", function(){});
		//alert("scripts loaded");
		if (!$("link[href='"+cssPath+"']").length) $('<link href="'+cssPath+'" rel="stylesheet">').appendTo("head");
	})(jQuery);
});
*/
var cssPath = "https://steinpyre.github.io/Stein-Plugin/assets/css/stein_plugin.css";
var Loader = function () { }
Loader.prototype = {
    require: function (scripts, callback) {
        this.loadCount      = 0;
        this.totalRequired  = scripts.length;
        this.callback       = callback;

        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function (evt) {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function (src) {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}
var mLoader = new Loader();
mLoader.require([
	"//code.jquery.com/jquery-latest.min.js",
	"https://steinpyre.github.io/Stein-Plugin/vendors/cookie_js/js.cookie.min.jssssssss",
	], 
	function() {
		mLoader.require(["https://steinpyre.github.io/Stein-Plugin/assets/js/stein_chat_tabs.js"], function(){})
		mLoader.require(["https://steinpyre.github.io/Stein-Plugin/assets/js/stein_ignore.js"], function(){})
		mLoader.require(["https://steinpyre.github.io/Stein-Plugin/assets/js/stein_timestamp.js"], function(){})
		mLoader.require(["https://steinpyre.github.io/Stein-Plugin/assets/js/stein_drop_alert.js"], function(){})
		//console.log('All Scripts Loaded');
		if (!$("link[href='"+cssPath+"']").length) $('<link href="'+cssPath+'" rel="stylesheet">').appendTo("head");
	}
);