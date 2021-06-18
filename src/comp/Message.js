import React, { Component } from "react";
import {
  ListItemText,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { Image as ImageIcon, StarOutline } from "@material-ui/icons";

export default class Message extends Component {
  render() {
    return (
      <>
        <ListItem style={{ paddingLeft: "0", paddingRight: "0", lineHeight: "1.5" }}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={this.props.data.subject}
            secondary={this.props.data.message}
          />
          <div>
            <small style={{position: "absolute", top: "5px", right: "0", width: "100%"}} >{this.props.data.display}</small>
              <StarOutline style={{position: "absolute", bottom: "0", right: "0"}} />
          </div>
        </ListItem>
        <Divider light />
      </>
    );
  }
}
