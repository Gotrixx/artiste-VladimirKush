let gMap,
	iAnimatedMarkers = 0;

const DEFAULT_CENTER = new google.maps.LatLng( 50.67, 4.6 );
const DEFAULT_ZOOM = 7;

const fInitmap = function() {
	gMap = new google.maps.Map( document.getElementById( "gmap" ), {
		"center": DEFAULT_CENTER,
		"mapTypeControl": false,
		"scroollWheel": false,
		"streetViewControl": false,
		"zoom": DEFAULT_ZOOM,
	} );
};