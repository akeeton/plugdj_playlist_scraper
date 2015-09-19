# plugdj_playlist_scraper
## Bookmarklet code

    javascript:(function()%7B(function()%7Bdocument.body.appendChild(document.createElement('script')).src%3D'https%3A%2F%2Frawgit.com%2Fakeeton%2Fplugdj_playlist_scraper%2Fmaster%2Fscraper.js'%3B%7D)()%7D)()

## Usage

- Drag the bookmarklet to your bookmark toolbar.  Alternatively, create a new bookmark with any name and paste the code into the "Location" box.
- Visit a room on https://plug.dj (for example, https://plug.dj/mashupfm).
- Activate the playlist that you want to scrape.
- Click the bookmarklet to run the code.
- A textarea with the text (JSON) version of the active playlist should pop up.  Copy it to a safe place.
- Refresh the page to continue using the site.
- Repeat for each of your playlists.
