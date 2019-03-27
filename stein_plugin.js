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

function set_cookie(name, value) {
  var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = cookie;
}
function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}
function delete_cookie(name) {
  document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
}