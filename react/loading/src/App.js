import React, { Component } from 'react';
//import logo from './logo.svg';
//import Users from './Users'
import User from './User'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/*
        <Users />
        */}
        <User id={'1'}/>
      </div>
    );
  }
}

export default App;
