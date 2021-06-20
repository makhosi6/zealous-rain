import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  ListItemText,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { Image as ImageIcon, StarOutline,Star } from "@material-ui/icons";

export default class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starred: false
    }
  }
  
  star = () => {
    this.setState({starred: !this.state.starred})
  }

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
          <div style={{maxHeight: "max-content", margin: 'auto'}} >
            <small
              style={{
                position: "absolute",
                top: "18px",
                right: "0",
              }}
            >
              {this.props.data.display}
            </small>
            <span onClick={this.star}>
            {
              (this.state.starred?
                
                <Star
                  style={{ marginTop : "30px" , color: "#ffcf40"}}
                />
                :
                <StarOutline
                  style={{ marginTop : "30px" , color: "grey"}}
                />
                )
            }
            </span>
            
          </div>
        </ListItem>
        <Divider light />
      </>
    );
  }
}

Message.propTypes = {
  data: PropTypes.exact({
    message: PropTypes.string,
    subject: PropTypes.string,
    display: PropTypes.string
  })
};