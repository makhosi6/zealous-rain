import React, { Component } from "react";
import Speaddial from "../comp/utilities/Speeeddial";
import { Container } from "@material-ui/core";
import Map from "../comp/Map";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container style={{width: "100%"}} >
          <Map/>
          <Speaddial />
        </Container>{" "}
      </div>
    );
  }
}
