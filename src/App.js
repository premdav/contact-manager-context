import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import Header from './Components/Header';

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding='Contact Manager' />
          <div className='container'>
            <Contacts />
          </div>
        </div>
      </Provider>
      
    );
  }
}

export default App;
