import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
