var url = window.location.href;
var match = url.match(/#(\d+)\/([\d\.]+)\/([\d\.]+)/);

if (match) {
  var zoom = parseInt(match[1], 10);
  var lat = parseFloat(match[2]);
  var lng = parseFloat(match[3]);

  if (!isNaN(zoom) && !isNaN(lat) && !isNaN(lng)) {
    L.marker([lat, lng], {icon: cardMarker1}).addTo(map);
  }
}






