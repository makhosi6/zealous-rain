import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Link,
  Typography,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Drawer,
} from "@material-ui/core";
import { Menu as MenuIcon, Home, Mail } from "@material-ui/icons";
import logo from "../img/quickloc8.svg";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  title: {
    color: "#3f51b5",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function TempDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const items = [
    {
      text: "/",
      name: "Home",
      key: "Home",
    },
    {
      text: "/messages",
      name: "Messages",
      key: "Mail",
    },
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="div">
        <Link color="inherit" href="/">
          <ListItem button>
            <Typography className={classes.title} variant="inherit" noWrap>
              <img
                style={{ alignItems: "right", objectFit: "contain" }}
                src={logo}
                alt="logo"
                width="100"
                height="30"
                sizes=""
                srcSet={logo}
              />
            </Typography>
          </ListItem>
        </Link>
        <Divider />

        {items.map((item) => (
          <>
            <Link href={item.text}>
              <ListItem key={Math.floor(Math.random * 1900)} button>
                <ListItemIcon>
                  {item.name === "Home" ? <Home /> : <Mail />}
                </ListItemIcon>
                <ListItemText className="caps" primary={item.name} />
              </ListItem>
            </Link>
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <MenuIcon
          key={Math.floor(Math.random * 1900)}
          onClick={toggleDrawer("left", true)}
        />
        <Drawer
          component="div"
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
