var markersLayer = new L.LayerGroup().addTo(map);

// Analyse de l'URL pour trouver les informations du marqueur
var urlParams = new URLSearchParams(window.location.search);
var markerParam = urlParams.get('marker');

if(markerParam){
  // Création d'un marqueur à partir des coordonnées dans la chaîne de requête
  var markerLatLng = markerParam.split(',');
  var marker = L.marker([parseFloat(markerLatLng[0]), parseFloat(markerLatLng[1])], {icon: cardIcon1}).addTo(markersLayer);
}

// Configuration du plugin Leaflet-hash pour prendre en compte les marqueurs dans l'URL
var hash = new L.Hash(map, { 
  //ajout du marqueur à l'URL
  updateCallback: function(){
    var url = new URL(window.location.href);
    if(markersLayer.getLayers().length > 0){
      var markerLatLng = markersLayer.getLayers()[0].getLatLng();
      url.searchParams.set('marker', markerLatLng.lat.toFixed(4)+','+markerLatLng.lng.toFixed(4));
      window.history.replaceState({}, '', url);
    }
  }
});
