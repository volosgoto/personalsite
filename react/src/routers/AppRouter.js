import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import AboutPage from "../components/AboutPage";
import ResumePage from "../components/ResumePage";
import Footer from "../components/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/resume" component={ResumePage}  />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage}  />

        {/* <Route path="/resume/:id" component={ResumeItemPage} /> */}
    
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
