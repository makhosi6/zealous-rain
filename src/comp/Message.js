import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
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
          <span> 01-21 </span>
          <span>*</span>
        </ListItem>
        <Divider light />
      </>
    );
  }
}
