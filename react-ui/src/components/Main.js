import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </Switch>
  </main>
);

export default Main;
