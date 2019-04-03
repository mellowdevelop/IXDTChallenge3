function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="80b844ff81bb69b386012947e857baa8";
	var city = document.getElementById("city").value;

	// samen stellen van een request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;

	// Haal de gegevens op uit de variable request
	fetch(request)

	// Json van maken
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	.then(function(response) {
		onAPISucces(response);
	})

	// Haal fouten eruit
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// Maak er een tekst van
	var type = response.weather[0].description;

	// Zet de tempratuur om in Celsius
	var degC = Math.floor(response.main.temp - 273.15);

	// DOM gebruiken om de stad te kiezen
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'There is no weather here <br /> Have you filled in the correct city?';
}

document.getElementById("getWeather").onclick = function(){
	getAPIdata();
};
