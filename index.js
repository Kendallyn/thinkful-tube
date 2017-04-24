$(document).ready(function () {

    $("#searchBar").submit(function (event) {
        event.preventDefault();
        var userSearch = $("#search").val();
        getSearchResults(userSearch);
    });

    function getSearchResults(userEntry) {
        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                part: "snippet",
                key: "AIzaSyDagHnmN5lCNiJ6nl3ixsWjedKuQ0FH1xg",
                q: userEntry,
                maxResults: 20,
                type: "video",
            },

            function (apiData) {
                console.log(apiData);
                if (apiData.pageInfo.totalResults == 0) {
                    alert("No results found.");
                } else {
                    displayResults(apiData.items);
                }
            });
    }

    function displayResults(videoArray) {
        var createHtmlList = "";
        $.each(videoArray, function (videoArrayKey, videoArrayValue) {
            createHtmlList += "<li>";
            createHtmlList += "<p>" + videoArrayValue.snippet.title + "</p>";
            createHtmlList += "<a href='https://www.youtube.com/watch?v=" + videoArrayValue.id.videoId + "'>";
            //shows video thumbnail
            createHtmlList += "<img src='" + videoArrayValue.snippet.thumbnails.high.url + " '/>";
            createHtmlList += "</a>";
            createHtmlList += "</li>";
        });
        $("#searchResults ul").html(createHtmlList);
        console.log(createHtmlList);
    }
});
