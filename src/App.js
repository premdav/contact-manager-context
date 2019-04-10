import React, { Component } from 'react';
import Contact from './Components/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The app component</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
