// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center at the San Francisco airport
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// //We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// //We create the tile layer that will be the background of our map; light map
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// //We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Skill Drill: Night navigation map as default
//We create the tile layer that will be the background of our map; light map
let nightNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Skill Drill: Day navigation map as 2nd option
let dayNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // Create a base layer that holds both maps.
// let baseMaps = {
//     Street: streets,
//     Dark: dark
// };

// // Create a base layer that holds both maps.
// let baseMaps = {
//     Light: light,
//     Dark: dark
// };

// Skill Drill: Base layer with night/day navigation maps
// Create a base layer that holds both maps.
let baseMaps = {
    "Night Navigation": nightNav,
    "Day Navigation": dayNav
};

// // Create the map object with a center and zoom level.
// let map = L.map('mapid', {
//     center: [30, 30],
//     zoom: 2,
//     layers: [streets]
// });

// // Change center of map to Toronto
// // Create the map object with a center and zoom level.
// let map = L.map('mapid', {
//     center: [44.0, -80.0],
//     zoom: 2,
//     layers: [light]
// });

// Skill Drill:
// Change center of map to Toronto
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [nightNav]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/scottwesley31/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/scottwesley31/Mapping_Earthquakes/main/torontoRoutes.json"

// // Grabbing our GeoJSON data (for the airportData)
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data).addTo(map);
// });

// // Grabbing our GeoJSON data (for the torontoData)
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data).addTo(map);
// });

// // Skill Drill(s): Add a popup marker that displays all airports' codes and names
// // Grabbing our GeoJSON data (for the airportData)
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h3><b>Airport code: " + feature.properties.faa + "</b></h3><hr>"
//         + "<h3><b>Airport name: " + feature.properties.name + "</b></h3>");
//         }
//     }).addTo(map);
// });

// // Skill Drill(s): Add a popup marker that displays all airline code and destinations
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h3><b>Airline code: " + feature.properties.airline + "</b></h3><hr>"
//         + "<h3><b>Destination: " + feature.properties.dst + "</b></h3>");
//         },
//         style: function(torontoData) {
//             return {
//                 color: "lightyellow",
//                 weight: 2
//             };
//         }
//     }).addTo(map);
// });

// // Skill Drill given solution
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//     color: '#ffffa1',
//     weight: 2,
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h3>Airline code: " + feature.properties.airline + "</h3><hr>"
//     + "<h3>Destination: " + feature.properties.dst + "</h3>");
//     }
//     }).addTo(map);
// });

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Skill Drill given solution; assign myStyle
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h3>Airline code: " + feature.properties.airline + "</h3><hr>"
    + "<h3>Destination: " + feature.properties.dst + "</h3>");
    }
    }).addTo(map);
});