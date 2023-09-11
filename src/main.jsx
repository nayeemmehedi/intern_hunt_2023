import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/mianProcess/Store.jsx";
// import Store from "./redux/mainStore/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App  style={{ fontFamily: "Besley" }}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
