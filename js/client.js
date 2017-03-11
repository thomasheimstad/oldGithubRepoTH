import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Charterfest from "./pages/Charterfest";
const app = document.getElementById('app');
ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0,0)} history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/charterfest" component={Charterfest}></Route>
    </Route>
  </Router>,
app);
