map.on('click', function(e) {
  var marker = L.marker(e.latlng, {icon: cardIcon1}).addTo(map);
  var url = 'https://chelovek-tenn.github.io/maproleplay.github.io/agence.html#2/' + e.latlng.lat + '/' + e.latlng.lng;
  marker.bindPopup('<a href="' + url + '">Lien vers mon site</a>').openPopup();
  alert("Repère placé avec succès!");
});
