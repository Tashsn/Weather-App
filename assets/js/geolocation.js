$('#search-form').on('submit', function (e) {
	e.preventDefault();


	let searchInput = $('#search-input').val().trim();

	if (searchInput === '' || searchInput === undefined) {
		alert('Please, input a city name');
		return;
	}

	const APIKey = '614e39c4a858162a69d4a7a87316e2d2';


	const queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&appid=${APIKey}`;

	$.ajax({
		type: 'GET',
		url: queryURL,
	}).then(function (response) {

		console.log('--------------');
		console.log(response);
		console.log('--------------');

		let cityName = response[0].name;

		let latitude = response[0].lat;

		let longitude = response[0].lon;


		localStorage.setItem('city', cityName);
		localStorage.setItem('latitude', latitude);
		localStorage.setItem('longitude', longitude);

		$('#search-input').val('');

		initForecast(cityName, latitude, longitude);
	});
});
