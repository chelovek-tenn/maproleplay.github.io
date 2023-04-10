var layer,mapExtent=[0,-8192,8192,0],mapMinZoom=1,mapMaxZoom=6,mapMaxResolution=.25,mapMinResolution=Math.pow(2,mapMaxZoom)*mapMaxResolution,tileExtent=[0,-8192,8192,0],crs=L.CRS.Simple;crs.transformation=new L.Transformation(1,-tileExtent[0],-1,tileExtent[3]),crs.scale=function(r){return Math.pow(2,r)/mapMinResolution},crs.zoom=function(r){return Math.log(r*mapMinResolution)/Math.LN2};var map=new L.Map("map",{maxZoom:mapMaxZoom,minZoom:mapMinZoom,crs:crs});layer=L.tileLayer("{z}/{x}/{y}.png",{minZoom:mapMinZoom,maxZoom:mapMaxZoom,tileSize:512,attribution:'Dispatcher Bot',noWrap:!0,tms:!1}).addTo(map),map.fitBounds([crs.unproject(L.point(mapExtent[2],mapExtent[3])),crs.unproject(L.point(mapExtent[0],mapExtent[1]))]),L.control.mousePosition().addTo(map);

var numMarker = L.Icon.extend({
  options:{
    iconSize:[32,37],
    iconAnchor:[16,37]
  }
});

var cardIcon1 = new numMarker({
  iconUrl:"markers/ammu.png"
});

var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('marker')) {
  var markerCoords = urlParams.get('marker').split(',');
  var markerLat = parseFloat(markerCoords[0]);
  var markerLng = parseFloat(markerCoords[1]);

  // Création d'un marqueur à partir des coordonnées récupérées
  var marker = L.marker([markerLat, markerLng], {icon: cardIcon1}).addTo(map);

  // Ajustement de la vue de la carte pour afficher le marqueur
  map.setView([markerLat, markerLng], 6);
}

// Initialisation du gestionnaire d'URL
var hash = new L.Hash(map);
