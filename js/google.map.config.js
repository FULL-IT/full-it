(function($){
	$(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			var map, myLatlng, myZoom, marker;
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(44.4321771,26.0301689);
			myZoom = 16;
			function initialize() {
				var mapOptions = {
					zoom: myZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng,
					scrollwheel: true
					
				};

				
				
				map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
				marker = new google.maps.Marker({
					map:map,
					draggable: false,
					animation: google.maps.Animation.DROP,
					position: myLatlng

				});
				

				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
					
				});
				
				map.setOptions({draggable: false, zoomControl: false, scrollwheel: true, disableDoubleClickZoom: true});

				
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}
	}); // End document ready

})(this.jQuery);		