var hash = window.location.hash.substring(1).split('/');
var zoom = hash[0];
var lat = hash[1];
var lng = hash[2];

// Initialiser la carte
L.marker([lat, lng], {icon: cardIcon4}).addTo(map);
