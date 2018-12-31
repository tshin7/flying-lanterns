import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Main/Home';
import Shop from './Main/Shop';
import About from './Main/About';
import Login from './Main/Login';
import Signup from './Main/Signup';

const Main = () => (
  <main>
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Home {...props} />}
      />
      <Route
        exact
        path="/shop"
        render={props => <Shop {...props} />}
      />
      <Route
        exact
        path="/about"
        render={props => <About {...props} />}
      />
      <Route
        exact
        path="/login"
        render={props => <Login {...props} />}
      />
      <Route
        exact
        path="/signup"
        render={props => <Signup {...props} />}
      />
    </Switch>
  </main>
);

export default Main;
