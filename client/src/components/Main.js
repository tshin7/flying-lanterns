import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './Main/Home';
import Shop from './Main/Shop';
import About from './Main/About';
import Login from './Main/Login';
import Signup from './Main/Signup';

import style from './Style';

const Main = () => (
  <main>
    <Switch>
      <Route
        exact
        path='/'
        render={(props) => <Home {...props} mainStyle={style.mainStyle} />}
      />
      <Route
        exact
        path='/shop'
        render={(props) => <Shop {...props} mainStyle={style.mainStyle} />}
      />
      <Route
        exact
        path='/about'
        render={(props) => <About {...props} mainStyle={style.mainStyle} />}
      />
      <Route
        exact
        path='/login'
        render={(props) => <Login {...props} mainStyle={style.mainStyle} />}
      />
      <Route
        exact
        path='/signup'
        render={(props) => <Signup {...props} mainStyle={style.mainStyle} />}
      />
    </Switch>
  </main>
);

export default Main;
