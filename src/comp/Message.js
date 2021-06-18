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
        <ListItem
          style={{ paddingLeft: "0", paddingRight: "0"}}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText className="mssg"
            primary={this.props.data.subject}
            secondary={this.props.data.message}
          />
          <div style={{maxHeight: "max-content", margin: 'auto',}} >
            <small
              style={{
                position: "absolute",
                top: "18px",
                right: "0",
              }}
            >
              {this.props.data.display}
            </small>
            <StarOutline
                color="disabled"
              style={{ marginTop : "30px" }}
            />
          </div>
        </ListItem>
        <Divider light />
      </>
    );
  }
}
