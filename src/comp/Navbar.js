import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
} from "@material-ui/core";
import MenuIcon from "./Drawer";
import { MyContext } from "../context";


export default class Navbar extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div style={flex}>
            <AppBar position="static" >
              <Toolbar>
                  <IconButton
                    edge="start"
                    style={{ marginRight: "10px" }}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                <Typography variant="h6" style={flex}>
                  <Link href={context.current.slug} color="inherit">
                   {context.current.page}
                  </Link>
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
              </Toolbar>
            </AppBar>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

const flex = {
  flexGrow: 1,
};
