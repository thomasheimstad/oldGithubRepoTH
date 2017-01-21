import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Info from "./pages/Info";
import Kalender from "./pages/Kalender";

const app = document.getElementById('app');

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/info" component={Info}></Route>
      <Route path="/kalender" component={Kalender}></Route>
    </Route>
  </Router>,
app);
