import React, { Component } from 'react';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import AddContact from './Components/contacts/AddContact';

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
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
      
    );
  }
}

export default App;
