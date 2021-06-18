mapboxgl.accessToken = 'pk.eyJ1IjoibWFraG9zaWkiLCJhIjoiY2txMnB4Z2RiMDZncTJ1bzl5ZnU4Y2pkMCJ9.R_yPxjY95wEbDUaXXD3UTg';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});