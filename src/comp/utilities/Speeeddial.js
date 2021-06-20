import React, { Component } from "react";
import {Fab,Link} from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";

export default class Speeeddial extends Component {
  render() {
    return (
      <Link href="/messages" color="inherit">
        <Fab
        color="secondary"
          variant="extended"
          style={{ position: "absolute", bottom: "40px", right: "20px" }}
        >
          <Mail style={{ marginRight: "10px" }} />
          Messages
        </Fab>
      </Link>
    );
  }
}
