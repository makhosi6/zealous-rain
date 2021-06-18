import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Map from './comp/Map';
// import 'mapbox-gl/dist/mapbox-gl.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Map />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
