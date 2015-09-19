# plugdj_playlist_scraper
## Bookmarklet code

    javascript:(function()%7B(function()%7Bdocument.body.appendChild(document.createElement('script')).src%3D'https%3A%2F%2Frawgit.com%2Fakeeton%2Fplugdj_playlist_scraper%2Fmaster%2Fscraper.js'%3B%7D)()%7D)()

## Usage

1. Drag the bookmarklet to your bookmark toolbar.  Alternatively, create a new bookmark with any name and paste the code into the "Location" box.
1. Visit a room on https://plug.dj (for example, https://plug.dj/mashupfm).
1. Activate the playlist that you want to scrape.
1. Click the bookmarklet to run the code.
1. A textarea with the text (JSON) version of the active playlist should pop up.  Copy it to a safe place.
1. Refresh the page to continue using the site.
1. Repeat for each of your playlists.
