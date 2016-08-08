(function($){
	$(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			var map, myLatlng, myZoom, marker;
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(44.431155, 26.131052);
			myZoom = 16;
			function initialize() {
				var mapOptions = {
			    var result = str.link("https://www.google.ro/maps/place/FULL-IT/@44.4311798,26.1286753,17z/data=!3m1!4b1!4m5!3m4!1s0x40b1fed8127b785b:0xfeec10a100bf7bd!8m2!3d44.431176!4d26.130864");
					zoom: myZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng,
					scrollwheel: true,
					
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
				
				map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});

				
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}
	}); // End document ready

})(this.jQuery);		