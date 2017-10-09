import React, { Component } from 'react';
// import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Footer />
      </div>
    );
  }
}

export default App;
