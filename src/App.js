import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectPage} />
      </Switch>
    </Router>
  );
};

export default App;
