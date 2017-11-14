import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AboutUs from './AboutUs';
import Services from './Services';
import Destinations from './Destinations';
import ContactUs from './ContactUs';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/destinations" component={Destinations} />
      <Route exact path="/contactUs" component={ContactUs} />
    </div>
  </Router>
);

export default Routes;
