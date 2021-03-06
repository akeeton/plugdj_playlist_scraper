(function () {

    injectJqueryAndRun();


    function injectJqueryAndRun() {
        // the minimum version of jQuery we want
        var v = "1.3.2";

        // check prior inclusion and version
        if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
            var done = false;
            var script = document.createElement("script");
            script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
            script.onload = script.onreadystatechange = function () {
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


    function zip(arrays) {
        return arrays[0].map(function (_, i) {
            return arrays.map(function (array) { return array[i] })
        });
    }


    function initMyBookmarklet() {
        (window.myBookmarklet = function () {
            // alert("initMyBookmarklet() 1");

            var authors = [];
            $("#playlist-panel .container .author").each(function (index, author) {
                authors.push($(author).text());
            });

            var titles = [];
            $("#playlist-panel .container .title").each(function (index, title) {
                titles.push($(title).text());
            });

            var imageUrls = [];
            $("#playlist-panel .playlist-media-first-item img, #playlist-panel .playlist-media-item img").each(function (index, image) {
                imageUrls.push(image.src);
            })

            var ids = [];
            for (var i = 0; i < imageUrls.length; i++) {
                var regex = /https:\/\/i.ytimg.com\/vi\/(.+)\/default.jpg/;
                var matches = imageUrls[i].match(regex);

                var id = (matches == null) ? "" : matches[1];
                ids.push(id);
            }

            var playlist = [];

            var zippedPlaylistEntries = zip([authors, titles, ids]);
            for (var i = 0; i < zippedPlaylistEntries.length; i++) {
                var author = zippedPlaylistEntries[i][0];
                var title = zippedPlaylistEntries[i][1];
                var id = zippedPlaylistEntries[i][2];

                var playlistEntry = {
                    "author": author,
                    "title": title,
                    "id": id
                };

                playlist.push(playlistEntry);
            }

            var playlistJson = JSON.stringify({ playlist }, null, 4);

            $("body").append(`
				<div id='scraped_playlists_window'>
					<div id='scraped_playlists' style=''>
                        <textarea name="scraped_playlists_textarea" rows="20" cols="50">` + playlistJson + `</textarea>
					</div>
					<style type='text/css'>
                        #scraped_playlists { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255); cursor: pointer; z-index: 900; }
                        #scraped_playlists textarea { color: black; sans-serif; position: absolute; top: 10%; left: 10%; }
					</style>
				</div>`
            );

            $("#scraped_playlists").fadeIn(750);
        })();
    }
})();

