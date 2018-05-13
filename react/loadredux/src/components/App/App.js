import React, { Component } from 'react';
import Loader from '../Loader';
import Post from '../Post';
//import './App.css';

class App extends Component {
  render() {
    return (
      <Loader>
        <div>
          <div>
            <div>
              <Post />
            </div>
          </div>
        </div>
      </Loader>
    );
  }
}

export default App;
