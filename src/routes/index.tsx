import { lazy, mount, route } from "navi";

import React from "react";
import App from "../App";
import Contact from "../components/pages/Contact";
import Events from "../components/pages/Events";
import Menu from "../components/pages/Menu";
import Homepage from "../components/pages/Homepage";

// Define your routes
const routes = mount({
  "/": route({
    title: "Home",
    view: <App />,
  }),
  "/contact": route({
    title: "Home",
    view: <Contact />,
  }),
  "/events": route({
    title: "Home",
    view: <Events />,
  }),
  "/menus": route({
    title: "Home",
    view: <Menu />,
  }),
  "/homepage": route({
    title: "Home",
    view: <Homepage />,
  }),
});
export default routes;
