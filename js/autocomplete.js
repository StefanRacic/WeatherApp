google.maps.event.addDomListener(window, "load", initialize);
function initialize() {
  var options = {
    types: ["(cities)"]
  };
  var input = document.querySelector(".weatherInput");
  autocomplete = new google.maps.places.Autocomplete(input, options);
}
