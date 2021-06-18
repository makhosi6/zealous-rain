import React, { Component } from "react";
import {
  ListItemText,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { Image as ImageIcon, StarOutline } from "@material-ui/icons/Image";

export default class Message extends Component {
  render() {
    return (
      <>
        <ListItem style={{ paddingLeft: "0", paddingRight: "0" }}>
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
            <small>{this.props.data.display}</small>
            <span>
              <StarOutline />
            </span>
          </div>
        </ListItem>
        <Divider light />
      </>
    );
  }
}
