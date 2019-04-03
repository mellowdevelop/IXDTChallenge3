function windData() {
	var city = document.getElementById("stad").value;
	var state = document.getElementById("state").value;
	var country = document.getElementById("country").value;
	var url = "https://api.airvisual.com/v2/city?city=" + city + "&state="+ state +"&country=" + country+ "&key=ZwNqsZSAAdJEnqNqi";

	fetch(url)

	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	.then(function(response) {
		// bij succes voer deze functie uit
		fetchSucces(response);
	})

	.catch(function (error) {
		// bij error voer deze functie uit
		fecthError(error);
	});
}


function fetchSucces(response) {
	// pak de data van de huidige windsnelheid uit de api
  var ws = response.data.current.weather.ws
	// gebruik DOM om hier dadelijk wat in te veranderen
	var wsBox = document.getElementById('windspeed');
	// zet de de data om in tekst voor html
	wsBox.innerHTML = "Windspeed " + ws + "m/s <br>";
}


function fetchError(error) {
	//wanneer er geen data te vinden is, laat weten dat het niet werkt.
	console.error('This data is unavailable', error);
	var wsBox = document.getElementById('windspeed');
	wsBox.className = 'hidden';
}

document.getElementById("getWind").onclick = function(){
	windData();
};
