import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

/*
* Index.js simply calls ReactDom.render to render the App component
* The App component includes all other necessary components that make up the entire application
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
