import React, { Component } from "react";
import {ListItemText,ListItem, Divider, ListItemAvatar, Avatar }from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

export default class Message extends Component {
  render() {
    return (
      <>
        <ListItem>
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

          <span> 01-21 </span>
          <span>*</span>
          </div>
        </ListItem>
        <Divider light />
      </>
    );
  }
}
