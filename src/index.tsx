import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import routes from "./routes";
import { Router, View } from "react-navi";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router routes={routes}>
      <Header />
      <View />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
