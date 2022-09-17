# Mapping_Earthquakes

Module 13

## Purpose of Project
The purpose of this project was to create an interactive map utilizing earthquake and tectonic plate GeoJSON data. This project primarily consists of JavaScript (which uses the d3 library, leaflet library, and Mapbox API), HTML, and CSS. The map that is generated plots earthquake location and magnitude as well as the location of tectonic plates.

## Results
This project generates a geographical map of the world which includes 3 tile layers (background maps) and 3 overlay maps (layers).

### Tile Layers
The map consists of 3 different Mapbox style tile layers: street, satellite, and dark. Here are screenshots of each of these background maps.

#### Streets Tile
![streets_tile](https://user-images.githubusercontent.com/107309793/190873331-7e4bb207-aef2-4054-a2a2-57bfe5035fd2.png)
#### Satellite Tile
![satellite_tile](https://user-images.githubusercontent.com/107309793/190873343-aa812211-0c87-44aa-9c5d-1eaa84ab5cd2.png)
#### Dark Tile
![dark_tile](https://user-images.githubusercontent.com/107309793/190873352-d9319605-320d-488e-b619-4694fb13912f.png)

### Overlay Maps
The map also consists of 3 layers: earthquakes, tectonic plates, and major earthquakes. Here are screenshots of each of these layers.

#### Earthquakes
![earthquake_data](https://user-images.githubusercontent.com/107309793/190873488-34de0857-d7e8-42d6-ad00-fcf7631d14b5.png)
If any of these circle markers are selected, a popup will appear with information about the magnitude and location of the earthquake.
![popup_example](https://user-images.githubusercontent.com/107309793/190873499-6bdbaf4b-e06a-463d-a366-6b207ee2796a.png)

#### Tectonic Plates
![tectonic_plates_data](https://user-images.githubusercontent.com/107309793/190873505-bca5c31b-1cd9-4d39-ae56-f6182229724a.png)

#### Major Earthquakes
![majorEQ_data](https://user-images.githubusercontent.com/107309793/190873514-4ce7793c-4f36-4697-9407-eaea572c8c9c.png)
Similar to the Earthquakes layer, any circle marker can be selected to display information about the earthquake.
![popup_example2](https://user-images.githubusercontent.com/107309793/190873554-49630da9-412a-4ad4-9d95-4ffe39a5acb1.png)

### Other Features
This interactive map also has a layer/tile control in the top right corner which allows for a user to toggle between any combination of tiles and layers. There is also a legend in the bottom right corner which displays how the color of the circle markers relates to the magnitude of the earthquake.

These additional features are depicted in the screenshot below with a few selectios made using the layer control:
![toggle_example](https://user-images.githubusercontent.com/107309793/190873709-5beaea0a-1cdf-4dec-b61c-d63d8b0dc9a8.png)

## Summary
Overall this project is successful in creating a world map with interactive features that allow for a user to toggle between different geoJSON datasets related to earthquakes and tectonic plates. This is a useful reference on how to create maps using JavaScript, HTL, and CSS.
