

// variable declaration
var searchForm = $("#search-form");
var searchCityEl = $("#search-city");






// grabbing search term from input
// build spi url with search term and the api key
// store api key in variable
// make api call using fetch
// convert the response from JSON
// start by console logging the data
searchForm.on("submit", function(event){
    event.preventDefault();
    var searchCity = searchCityEl.val();
    console.log(searchCity);
    var apiKey = "ba9531337e96e3ddba6fccf15d1d0b48";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&appid=" + apiKey;

    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });


});


