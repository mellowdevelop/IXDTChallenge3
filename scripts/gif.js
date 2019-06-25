window.onload = function() {
	var api = "https://api.giphy.com/v1/gifs/trending?"; //api link

	var apiKey = "&api_key=Wcg2bvD303bHYF95u2LhwgTRbHr0i5K2"; //api key

	var query = "&limit=2&rating=G"; //de query voor in de url


	function getGIFdata() {

	var url = api + apiKey + query; //maak een url van de variables

	fetch(url)

	.then(function(response) {
		return response.json();//omzetten json
	})

		.then(function(response) {

			for (var i = 0; i < response.data.length; i++){//for loop die de goede data eruit pakt
				document.getElementById("gifplace").innerHTML += '<img class="gifs" src=" ' + response.data[i].images.fixed_width.url + '">' + '<br>';
			}
		});
	}

	getGIFdata();
}
