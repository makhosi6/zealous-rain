import React from "react";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  process.env.REACT_APP_TOKEN;

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: 18.5008116,
      lat: -33.876115,
      zoom: 9,
    };
    this.mapContainer = React.createRef();


  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
//
this.props.coords.features.forEach(function(marker) {

  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});
//
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    return (
      
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}
