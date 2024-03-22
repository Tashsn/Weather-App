// * Create a submit event
$('#search-form').on('submit', function (e) {
	// use the prevent default method to stop the submit deleting the input
	e.preventDefault();

	// Register the value of the input
	let searchInput = $('#search-input').val().trim();

	if (searchInput === '' || searchInput === undefined) {
		alert('Please, input a city name');
		return;
	}

	// # API QUERIES
	// Declare the API key
	const APIKey = '614e39c4a858162a69d4a7a87316e2d2';

	// Declare query URL
	const queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&appid=${APIKey}`;

	// * Use the AJAX call
	$.ajax({
		type: 'GET',
		url: queryURL,
	}).then(function (response) {
		// Console Log of response Object
		console.log('--------------');
		console.log(response);
		console.log('--------------');

		// Name of city
		let cityName = response[0].name;
		// Latitude
		let latitude = response[0].lat;
		// Longitude
		let longitude = response[0].lon;

		// Save into the local storage
		localStorage.setItem('city', cityName);
		localStorage.setItem('latitude', latitude);
		localStorage.setItem('longitude', longitude);

		// * Keep the input clear after every search
		$('#search-input').val('');

		initForecast(cityName, latitude, longitude);
	});
});
