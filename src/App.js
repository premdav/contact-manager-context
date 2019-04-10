import React, { Component } from 'react';
import Contact from './Components/Contact';
import Header from './Components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
