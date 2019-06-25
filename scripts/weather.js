//Link naar de api
var api = "https://api.openweathermap.org/data/2.5/weather?";
//API key variabel
var apiKey = "&appid=80b844ff81bb69b386012947e857baa8";
//query variabel met Zoetermeer
var query = "q=Zoetermeer";

//functie voor api info te krijgen
function getWeatherData() {
//url halen uit de variabelen
	var url = api + query + apiKey;
		fetch(url)
			.then(function(response) {
				return response.json();
			})

		// render weather per day
		.then(function(response) {
			//Kelvin omzetten naar celcius.
			var celsius = response.main.temp - 273.15;;
			//geen decimale getallen
			var temp = celsius.toFixed(0);

			document.getElementById("weather").innerHTML +=  '<h2 class="weathertitle">' + temp + ' ' + '&#176;C'+ '<br>' + '</h2>' ;
		});
}

getWeatherData();
