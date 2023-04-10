const params = new URLSearchParams(window.location.hash.slice(1));
const marker = params.get("marker");

if (marker) {
  const [markerlat, markerlng] = marker.split(",");

  // Création d'un marqueur à partir des coordonnées récupérées
L.marker([markerLat, markerLng], {icon: cardIcon1}).addTo(map);

  // Ajustement de la vue de la carte pour afficher le marqueur
} else {
console.log('Marker non detecter')
}
