var i = 0;
	var markers = [];
	function initMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: {lat: -34.397, lng: 150.644}
	  });
	  plotAddress(map);
	}

	function plotAddress(resultsMap) {	
	  var arrAddress = addressEU;
	
	  for (address in arrAddress)
	  {
		 var location = { lat: arrAddress[address].lat, lng: arrAddress[address].lon };
		 var addressTitle = arrAddress[address].title;
		 
		  resultsMap.setCenter(location);
		  
		  plotMarker(addressTitle,resultsMap,location)
	  
	  }
	}
	function plotMarker(addressTitle,resultsMap,location)
	{
		var infowindow = new google.maps.InfoWindow({
			content: addressTitle
		  });
          
		  var marker = new google.maps.Marker({
			map: resultsMap,
			position: location,
			title: addressTitle
		  });
		  
		   marker.addListener('click', function() {
			infowindow.open(resultsMap, marker);
		   });	
	
	}
