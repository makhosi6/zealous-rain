import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Error from "../src/pages/Error";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Messages from "./pages/Messages";
import Navbar from "./comp/Navbar";
import Loader from "./comp/utilities/Loader";
import Map  from "./comp/Map";

export default class App extends React.Component {
  state = {
    error: "",
    hasLoaded: false,
  };

  handleLoad = () => {
    setTimeout(() => {
      this.setState({ hasLoaded: true });
    }, 3500);
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    console.log({ error });
    this.setState({ hasError: true });
    this.setState({ error: error.message });
  }
  componentDidMount() {
      setTimeout(() => {
        this.setState({ hasLoaded: true });
      }, 3500);
  }

  render() {
    if (this.state.hasError) {
      // This is a fallback UI
      return (
        <>
          <Error error={this.state.error} />
        </>
      );
    }
    return (
     

      <React.Fragment>
        <CssBaseline />
        {this.state.hasLoaded ? (
          <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/messages" component={Messages} />
              <Route exact path="/:slug">
                <Error error="404 - Page Not Found!" />
              </Route>
            </Switch>
          </>
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}
