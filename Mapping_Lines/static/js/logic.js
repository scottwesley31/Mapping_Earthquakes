// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Change zoom to 5 and center of map to SFO
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
// ];

// // Add two new sets of coordinates (two more stops from LAX to SLC to SEA to SFO)
// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Skill Drill: SFO to JFK to AUS to YYZ
// Bonus: Add your city as a stopping point (DIA)
// Coordinates:
var SFO = [47.4502, -122.3088]
var JFK = [40.6413, -73.7781]
var AUS = [30.1975, -97.6664]
var YYZ = [43.6777, -79.6248]
var DIA = [39.8561, -104.6737]
// Coordinates for each point to be used in the line.
let line = [
    SFO,
    AUS,
    YYZ,
    JFK,
    DIA
];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: 'red'
// }).addTo(map);

// // Make the line yellow
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: 'yellow'
// }).addTo(map);

// Skill Drill: , blue dashed line, weight of 4, opacity of 0.5
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: 'blue',
    dashArray: '5,10',
    weight: 4,
    opacity: 0.5
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     // Loop through each city object and grab the latitude & longitude
//     L.marker(city.location)    
//     // Add popup message which includes city, state, and population info
//     // Format the population with a thousands separator using toLocaleString() method
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// //We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Map style 'satellite-streets-v11'
// //We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Skill Drill: Light map
// Map style 'satellite-streets-v11'
//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);