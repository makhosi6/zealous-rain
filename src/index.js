import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MyProvider } from "./context";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({palette: {
  primary: {
    main: "#FF5722",
  },
  secondary: {
    main: "#FFCCBC",
    dark: '#ff612fe8',
    contrastText: '#2e302f',
  },
  accent: {
    main: "#2e302f",
  },
  danger: {
    main: "#fe2a39",
  },

},
});




const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>{" "}
    </MyProvider>
    </ThemeProvider>,
  rootElement
);
