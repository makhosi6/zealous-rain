import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MyProvider } from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <MyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>{" "}
    </MyProvider>,
  rootElement
);
