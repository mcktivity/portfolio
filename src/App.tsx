import React from "react";
import "./css/site.scss";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Banner from "./views/Banner";
import Home from "./views/Home";
import About from "./views/About/About";

const history = createBrowserHistory({ basename: "/" });

function App() {
  return (
    <div className="App animatedBg">
      <ul className="object-area">
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <Router history={history}>
        <Banner />
        <Switch>
          <Route path="/portfolio" exact component={Home} />
          <Route path="/portfolio/om" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
