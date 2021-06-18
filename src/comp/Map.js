import React, { Component } from "react";

export default class Map extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://raw.githubusercontent.com/makhosi6/zealous-rain/main/public/map.js";
      document.body.appendChild(script);

    console.log("scripts FIRED");
  }
  render() {
    return <div id="map"></div>;
  }
}
