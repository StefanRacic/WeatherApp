google.maps.event.addDomListener(window, "load", initialize);
function initialize() {
  var input = document.querySelector(".weatherInput");
  autocomplete = new google.maps.places.Autocomplete(input);
}
