import React, { Component } from "react";
import { Container, List } from '@material-ui/core';
import Message from "../comp/Message";
import { MyContext } from "../context";


export default class Messages extends Component {

componentDidMount(){
  this.props.currentPage({page: "Messages", slug:null})
}

  render() {
    return (
      <MyContext.Consumer>
      {(context) => (
      <Container > 
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
