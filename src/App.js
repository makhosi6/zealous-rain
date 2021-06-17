import React from "react";
import Home from "../src/pages/Home";
import Error from "../src/pages/Error";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import Messages from "./pages/Messages";
import Navbar from "./comp/Navbar";

export default class App extends React.Component {
 state = {
       error: "",
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    console.log({error})
    this.setState({ hasError: true });
    this.setState({ error: error.message });
  }
 
render() {
  if (this.state.hasError) {
    // You can render any custom fallback UI
    return (
        <>
          <Error error={this.state.error}/>
        </>
    );
  }
  return (
    //https://material-ui.com/components/snackbars/
    <React.Fragment>
    <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/messages" component={Messages} />
      </Switch>
      </React.Fragment>
  );
}}

