// Add console log to check to see if our code is working.
console.log("working");

// Night streets map as default
//We create the tile layer that will be the background of our map; light map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Day satellite streets map as 2nd option
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Base layer with night/day navigation maps
// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Change center of map to geographic center of US
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Grabbing our GeoJSON data (for the earthquakeData)
d3.json(earthquakeData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map);
});

// // Create a style for the lines.
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// };

// // Skill Drill given solution; assign myStyle
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h3>Airline code: " + feature.properties.airline + "</h3><hr>"
//     + "<h3>Destination: " + feature.properties.dst + "</h3>");
//     }
//     }).addTo(map);
// });

// // Skill Drill: Lines blue, with weight of 1, fill color yellow
// // Create a style for the lines.
// let myStyle = {
//     color: "#0000FF",
//     fillColor: "#FFFF00",
//     weight: 1
// };

// // Skill Drill: Popup for each neighborhood
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h3>Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
//     }
//     }).addTo(map);
// });