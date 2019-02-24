import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import App from '../components/App';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import About from '../components/About';
import NotFoundPage from '../components/NotFoundPage';

import { Provider } from 'react-redux';
import store from '../store';


const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
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
    </BrowserRouter>
  </Provider>
);

export default AppRouter;


