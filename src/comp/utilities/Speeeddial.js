import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Mail from "@material-ui/icons/Mail";

export default class Speeeddial extends Component {
  render() {
    return (
      <Fab
        variant="extended"
        style={{ position: "absolute", bottom: "20px", right: "20px" }} >
        <Link to="/messages">
          <Mail />
          Messages
        </Link>
      </Fab>
    );
  }
}
