function initMap() {
	var ucsd_ltlng = {lat:32.878841, lng:-117.235911}


	var map = new google.maps.Map(document.getElementById('map'),{
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map:map,
		title: "UCSD"
	});
}