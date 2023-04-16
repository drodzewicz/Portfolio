import App from "App/App";
import { MenuProvider } from "context/MenuContext";
import React from "react";
import ReactDOM from "react-dom";

import "assets/styles/index.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
