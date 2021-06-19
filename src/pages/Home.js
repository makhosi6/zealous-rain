import React, { Component } from "react";
import Speaddial from "../comp/utilities/Speeeddial";
import { Container } from "@material-ui/core";
import Map from "../comp/Map";
import { MyContext } from "../context";

export default class Home extends Component {
  render() {
    return (
      <MyContext.Consumer>
      {(context) => (
      <div>
        <Container style={{width: "100%"}} >
          <Map currentPage={context.currentPage} coords={context.coords}/>
          <Speaddial />
        </Container>{" "}
      </div>
       )}
       </MyContext.Consumer>
    );
  }
}
