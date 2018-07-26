import React, { Component } from 'react';

import SMenu from './SMenu'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

import './index.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app">
          <div>Test Smart menu</div>
          <SMenu>
            <Comp1 key='Comp1 key' id='id1' name='name 1'/>
            <Comp2 key='Comp2 key' id='id2' name='name 2'/>
            <Comp3 key='Comp3 key' id='id3' name='name 3'/>
          </SMenu>
        </div>
      </div>
    );
  }
}

export default App;
