var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('marker')) {
  var markerCoords = urlParams.get('marker').split(',');
  var markerLat = parseFloat(markerCoords[0]);
  var markerLng = parseFloat(markerCoords[1]);

  // Création d'un marqueur à partir des coordonnées récupérées
L.marker([markerLat, markerLng], {icon: cardIcon1}).addTo(map);

  // Ajustement de la vue de la carte pour afficher le marqueur
} else {
console.log('Marker non detecter')
}
