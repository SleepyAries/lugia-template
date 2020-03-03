import React from "react";
import { createBrowserHistory } from "history";
import { createApp, go, render } from "@lugia/lugiax-router";
import "@lugia/lugia-web/dist/css/global.css";
import Main from "./App";

const history = createBrowserHistory();

const App = createApp(
  {
    "/": {
      component: Main
    }
  },
  history
);

render(() => {
  return <App />;
}, "root");
