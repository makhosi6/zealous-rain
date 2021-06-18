import React, { Component } from 'react';
import {AppBar, Toolbar, Typography,Button, IconButton, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class Navbar extends Component {
    render() {
        return (
            <div style={flex}>
            <AppBar position="sticky">
              <Toolbar>
                <IconButton edge="start" style={{marginRight: "10px"}} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={flex}>
                <Link href="/" color="inherit">
                Quicklc8
                </Link>
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