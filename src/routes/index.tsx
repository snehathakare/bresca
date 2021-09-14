import { lazy, mount, route } from "navi";

import React from "react";
import App from "../App";
import { Header } from "../components/common/Header";

// Define your routes
const routes = mount({
  "/": route({
    title: "Home",
    view: <App />,
  }),
  "/contact": route({
    title: "Home",
    view: <Header />,
  }),
  "/events": route({
    title: "Home",
    view: <Header />,
  }),
  "/gifts": route({
    title: "Home",
    view: <Header />,
  }),
  "/reservations": route({
    title: "Home",
    view: <Header />,
  }),
});
export default routes;
