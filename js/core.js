var layer, mapExtent = [0, -8192, 8192, 0], mapMinZoom = 1, mapMaxZoom = 6, mapMaxResolution = .25, mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution, tileExtent = [0, -8192, 8192, 0], crs = L.CRS.Simple;
crs.transformation = new L.Transformation(1,-tileExtent[0],-1,tileExtent[3]),
crs.scale = function(r) {
    return Math.pow(2, r) / mapMinResolution
}
,
crs.zoom = function(r) {
    return Math.log(r * mapMinResolution) / Math.LN2
}
;
var map = new L.Map("map",{
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    crs: crs
});
layer = L.tileLayer("{z}/{x}/{y}.png", {
    minZoom: mapMinZoom,
    maxZoom: mapMaxZoom,
    tileSize: 512,
    attribution: '&copy; Dispatcher Bot map</a>',
    noWrap: !0,
    tms: !1
}).addTo(map),
map.fitBounds([crs.unproject(L.point(mapExtent[2], mapExtent[3])), crs.unproject(L.point(mapExtent[0], mapExtent[1]))]),
L.control.mousePosition().addTo(map);


var hash = new L.Hash(map);

// Utilisation d'un événement personnalisé pour détecter quand le hash a été initialisé
map.on('hashchange', function() {
    var hashParams = hash.parseHash(location.hash);
    if (hashParams.marker) {
        var coords = hashParams.marker.split(',');
        L.marker([coords[0], coords[1]], {icon: cardIcon1}).addTo(map);
    }
});
