import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { NavProvider } from "./nav-context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </StrictMode>,
  rootElement
);
