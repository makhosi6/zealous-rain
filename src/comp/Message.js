import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";

export default class Message extends Component {
  render() {
    return (
      <List style={{ width: "100%", maxWidth: "400px" }}>
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
      </List>
    );
  }
}
