var hash = window.location.hash.substring(1).split('/');
var zoom = hash[0];
var lat = hash[1];
var lng = hash[2];

// Initialiser la carte
var map = L.map('map').setView([lat, lng], zoom);
var marker = L.marker([lat, lng], {icon: cardIcon4}).addTo(map);
