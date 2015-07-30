var defaultBounds = new google.maps.LatLngBounds(
	new google.maps.LatLng(49.95,-8.166667),
	new google.maps.LatLng(58.666667,1.762833)
);

var options = {
	bounds: defaultBounds,
  componentRestrictions: {country: 'uk'}
};

var input = document.getElementById("search-form-tx");

autocomplete = new google.maps.places.Autocomplete(input, options);

var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();
    console.log("places");
    console.log(places);
});