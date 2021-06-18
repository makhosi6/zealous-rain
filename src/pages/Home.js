import React, { Component } from "react";
import Speaddial from "../comp/utilities/Speeeddial";
import { Container } from "@material-ui/core";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13243.112263032506!2d18.4288102!3d-33.9211111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x607472ea9e6a0724!2sCape%20Town%20Civic%20Centre!5e0!3m2!1sen!2sza!4v1624042173435!5m2!1sen!2sza"
           
            style={{
                width: "100vw",
                height: "95vh",
              border: "0",
            }}
            allowfullscreen
            loading="lazy"
          >
            {" "}
          </iframe>{" "}
          <Speaddial />
        </Container>{" "}
      </div>
    );
  }
}
