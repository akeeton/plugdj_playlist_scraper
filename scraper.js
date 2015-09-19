(function(){

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

    
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
		    // alert("initMyBookmarklet() 1");

		    var playlist = "";

		    $("#playlist-panel .author").each(function (index, author) {
		        playlist += $(author).text() + "\n";
		    });

		    $("#playlist-panel .title").each(function (index, title) {
		        playlist += $(title).text() + "\n";
		    });

		    playlist += "\n";

		    $("body").append(`
				<div id='scraped_playlists_window'>
					<div id='scraped_playlists' style=''>
                        <textarea name="scraped_playlists_textarea" rows="20" cols="50">` + playlist + `</textarea>
					</div>
					<style type='text/css'>
                        #scraped_playlists { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255); cursor: pointer; z-index: 900; }
                        #scraped_playlists textarea { color: black; sans-serif; position: absolute; top: 10%; left: 10%; text-align: center; }
					</style>
				</div>`
            );

		    $("#scraped_playlists").fadeIn(750);
		})();
	}
})();

