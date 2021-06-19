import React, { Component } from 'react';
import {AppBar, Toolbar, Typography,Button, IconButton, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class Navbar extends Component {
    render() {
        return (
            <div style={flex}>
            <AppBar>
              <Toolbar>
              <Link href="/" color="inherit">
                <IconButton edge="start" style={{marginRight: "10px"}} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                </Link>
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




var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.032, 38.913]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.414, 37.776]
    },
    properties: {
      title: 'Mapbox',
      description: 'San Francisco, California'
    }
  }]
};
