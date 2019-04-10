import React, { Component } from 'react';
import Contact from './Components/Contact';
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding='Contact Manager' />
        <div className='container'>
          <Contact name='John Doe' email='jdoe@gmail.com' phone='555-555-5555' />
          <Contact name='Karen Smith' email='ksmith@gmail.com' phone='444-555-5555' />
        </div>
      </div>
    );
  }
}

export default App;
