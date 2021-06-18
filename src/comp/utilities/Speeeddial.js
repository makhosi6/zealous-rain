import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Mail from "@material-ui/icons/Mail";
import { Link } from 'react-router-dom';

export default class Speeeddial extends Component {
  render() {
    return (
      <Fab
        variant="extended"
        style={{ position: "absolute", bottom: "20px", right: "20px" }} >
        <Link to="/messages">
          <Mail style={{marginRight: "10px"}}/>
          Messages
        </Link>
      </Fab>
    );
  }
}
