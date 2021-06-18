import React, { Component } from 'react';
import {AppBar, Toolbar, Typography,Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class Navbar extends Component {
    render() {
        return (
            <div style={flex}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" style={{marginRight: "10px"}} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={flex}>
                App
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}


const flex = {
    flexGrow: 1
}