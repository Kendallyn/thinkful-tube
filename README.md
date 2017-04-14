# thinkful-tube
API Key AIzaSyDagHnmN5lCNiJ6nl3ixsWjedKuQ0FH1xg

endpoint "https://www.googleapis.com/youtube/v3/search"

Need to pass the following params object:
part: 'snippet'
key: (your API key as a string)
q: (your search term as a string)

The data you get back is more complicated, but like we did with OMDB, put the data in the console and explore

Bonus task:
Once you get the thumbnails to appear, make them clickable. Each thumbnail should link to the YouTube page that plays that video.

Hints:
-If you can't find the thumbnails, here is a hint: items.snippet.thumbnails.medium.url

-The URL to the video is not in the data, but you are given the ID. Go to the YouTube site and see if you can find how the ID is used.

-See the Youtube API documentation for 'search list': https://developers.google.com/youtube/v3/docs/search/list

App Requirements
-Accept a user search term

-Get JSON from the YouTube API based on the user search term

-Display the thumbnail image of the returned videos

Optional Advanced functionality challenges
-Make the images clickable, leading the user to the YouTube video, on YouTube

-Make the images clickable, playing them in a lightbox

-Show a link for more from the channel that each video came from

-Show buttons to get more results (using the previous and next page links from the JSON)
