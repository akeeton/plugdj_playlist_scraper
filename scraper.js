(function(){

    injectJqueryUi();
    injectJqueryAndRun();


    function injectJqueryAndRun() {
        // the minimum version of jQuery we want
        var v = "1.3.2";

        // check prior inclusion and version
        if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
            var done = false;
            var script = document.createElement("script");
            script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
            script.onload = script.onreadystatechange = function(){
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    done = true;
                    initMyBookmarklet();
                }
            };
            document.getElementsByTagName("head")[0].appendChild(script);
        } else {
            initMyBookmarklet();
        }
    }

    
    function injectJqueryUi() {
        var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js";
		document.getElementsByTagName("head")[0].appendChild(script);

		var styleLink = document.createElement("link");
		styleLink.rel = "stylesheet";
        styleLink.href = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css";

        document.getElementsByTagName("head")[0].appendChild(styleLink);
    }
	

	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
		    alert("initMyBookmarklet() 1");

		    alert($(".author").text());
		})();
	}
})();

