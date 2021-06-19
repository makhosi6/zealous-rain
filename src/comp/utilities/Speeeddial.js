import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Mail from "@material-ui/icons/Mail";
import Link from "@material-ui/core/Link";

export default class Speeeddial extends Component {
  render() {
    return (
      <Link href="/messages" color="inherit">
        <Fab
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
