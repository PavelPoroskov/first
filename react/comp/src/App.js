import React, { Component } from 'react';

import CompParent from './CompParent'
import CompStateParent from './CompStateParent'
import ChildParent from './ChildParent'
import CompUnContrParent from './CompUnContrParent'
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/*
        <CompParent />
        */}
        <CompStateParent />
        <CompStateShouldParent />
        {/*
        <ChildParent />
        <CompUnContrParent />
        */}
      </div>
    )
  }
}

export default App;
