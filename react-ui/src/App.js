import React, { Component } from 'react';
// import './App.css';

import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
