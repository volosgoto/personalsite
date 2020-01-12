import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import NotFoundPage from "../components/layouts/NotFoundPage";
import App from "../components/App";

import Resume from "../components/pages/Resume";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";

import GitHubFinder from "../modules/GitHub_Finder-master/GitHubFinder";

import { Provider } from "react-redux";
import store from "../store";

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
