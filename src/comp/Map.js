import React from "react";
import mapboxgl from "!mapbox-gl";
import PropTypes from 'prop-types';

mapboxgl.accessToken =
  process.env.REACT_APP_TOKEN || "pk.eyJ1IjoibWFraG9zaWkiLCJhIjoiY2txMnB0dWdkMDV5bDJwdXMzZzdxZjZ2biJ9.iDiIYxSK5uHCJibuqc5K-w";

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

    this.props.currentPage({page:"Quicklc8", slug: "/"});
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

  // make a marker for each feature and add to the map and add options
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setRotation(marker.geometry.bearing)
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
Map.propTypes = {
  currentPage: PropTypes.func,
  coords: PropTypes.exact({
    type: PropTypes.string,
    features: PropTypes.array
  }),   
};