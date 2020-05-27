$("#run-search").on("click", function (event) {
    event.preventDefault();
    var searchTerm = $("#search-term").val();
    var displayLimit = $("#inputGroupSelect01").val()
    var startYear = $("#startYear").val()
    var endYear = $("#endYear").val()

    console.log({ searchTerm, displayLimit })
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        searchTerm + "&api-key=UDt8GWsElFCKNhou0EDA0g3K83pAGddy&limit=";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
   
        .then(function (response) {

            console.log(queryURL)
            console.log(response)
            
            var articles = response.response.docs

            for (var i = 0; i < displayLimit; i++) {

                console.log(articles[i].headline.main)

                var div = $("<div>")
                var h1Element = $("<h1>")
                h1Element.text(articles[i].headline.main)
                var p = $("<p>")
                p.text(articles[i].byline.original)
                var section = $("<p>")
                section.text("Section: " + articles[i].section_name)
                var webURL = $("<a>")
                webURL.attr("href", articles[i].web_url)
                webURL.text(articles[i].web_url)
                var date = $("<p>")
                date.text(articles[i].pub_date)
            

                div.append(h1Element)
                div.append(p)
                div.append(section)
                div.append(date)
                div.append(webURL)
                $("#article-section").append(div)

            }

           
        })
})
function clear() {
    $("#article-section").empty();
  }
  $("#clear-all").on("click", clear);