

// variable declaration
var searchForm = $("#search-form");
var searchCityEl = $("#search-city");
var resultSection = document.getElementById("result-section");



// displaying Api results in result section
function displayWeather(data) {
    // var temp = data.main.temp;
    // var humidity = data.main.humidity;
    // var windSpeed = data.wind.speed;
    
    $("#cityName").append(data.name);
    $("#tempLabel").append("Temperature: " + data.main.temp + "°F");
    $("#humidityLabel").append("Humidity: " + data.main.humidity + "%");
    $("#windSpeedLabel").append("Wind Speed: " + data.wind.speed + "mph");
}




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
        // console.log(data.main.temp);
        // console.log(data.main.humidity);
        console.log(data);
        console.log(data.wind.speed);
        displayWeather(data);
    });
});


function convertDate(currentDate) {
    return moment.unix(currentDate).format('MM/DD/YYYY');
}
