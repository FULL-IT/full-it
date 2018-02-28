(function($){
	$(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			var map, myLatlng, myZoom, marker;
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(44.4316526,26.0326447);
			myZoom = 16;
			function initialize() {
				var mapOptions = {
					zoom: myZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng,
					scrollwheel: true,
					zoomControl: true,
					scrollwheel: true,
					
				};

				
				
				map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
				marker = new google.maps.Marker({
					map:map,
					draggable: false,
					scrollwheel: true,
					zoomControl: true,
					scrollwheel: true,
					animation: google.maps.Animation.DROP,
					position: myLatlng

				});
				

				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
					
				});
				
				map.setOptions({draggable: false, zoomControl: true, scrollwheel: true, disableDoubleClickZoom: true});

				
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}
	}); // End document ready

})(this.jQuery);		