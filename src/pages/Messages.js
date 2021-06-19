import React, { Component } from "react";
import { Container, List } from '@material-ui/core';
import Message from "../comp/Message";
import { MyContext } from "../context";


export default class Messages extends Component {
  render() {
    return (
      <MyContext.Consumer>
      {(context) => (
      <Container >  {/* maxWidth="xl" */}
        <List style={{ width: "100%", margin: 'auto', maxWidth: "700px" }}>
          {context.messages.map((x) => (
           <Message key={Math.floor(Math.random()*123456)} data={x} />
          ))}
        </List>
      </Container>
      )}
      </MyContext.Consumer>
    );
  }
}

let mssgs = [
 
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Kraaifontein East Cape Town Cape Town Western Cape",
    subject: "Engine OFF for CF66306",
    display: "15-Jun",
  },
];
