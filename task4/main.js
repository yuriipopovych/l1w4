(function() {
	navigator.geolocation.getCurrentPosition(
		function(position) {
			console.log(`I am here ${position.coords.latitude}, ${position.coords.longitude}`);
			console.log(position.coords.accuracy);
		});
});


window.onload = function () {
var result;
var map;
result = document.getElementById('result');

var ourOptions = {
	zoom: 15,
	myTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('mapSurface'), ourOptions);
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure);
	result.innerHTML = 'Successful';
	} else {
		result.innerHTML = 'The Browser is too old';
		goToDefaultLocation();
	}
	function geoSuccess(position) {
		var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		map.setCenter(location);
	}
	function geoFailure() {
		goToDefaultLocation();
	}
	goToDefaultLocation() {
		var london = new google.maps.LatLng(51.508530, -0.076132);
		map.setCenter(london);
	}
}






