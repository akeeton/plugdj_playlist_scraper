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


    //function injectDialog() {
    //    var dialog = $('<div/>', {
    //        class: 'dialog',
    //        title: 'Playlist scrape results'
    //    });

    //    dialog.appendTo($(document.body));
    //    dialog.dialog();
    //}
	
                        //#frame iframe { display: none; position: fixed; top: 10%; left: 10%; width: 80%; height: 80%; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }
					//<iframe src='http://en.wikipedia.org/w/index.php?&search="+s+"' onload="$('#frame iframe').slideDown(500);">Enable iFrames.</iframe>

	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
		    alert("initMyBookmarklet() 1");

		    //injectDialog();
		    //$("#dialog").html(($(".author")));

		    $("body").append(`
				<div id='scraped_playlists_window'>
					<div id='scraped_playlists' style=''>
						<p>Container</p>
					</div>
					<style type='text/css'>
                        #scraped_playlists { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255); cursor: pointer; z-index: 900; }
                        #scraped_playlists p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }
					</style>
				</div>`
            );

		    $("#scraped_playlists").fadeIn(750);
		})();
	}
})();

