import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import ScrollingList from './ScrollingList'

class App extends Component {
  state = {
    list: []
  }

  render() {
    const {list} = this.state
    return (
      <div className="App">
        <button onClick={this.addItems} value='Add items'> Add items</button>
        <ScrollingList list={list} />
        <button onClick={this.addItems} value='Add items'> Add items</button>
      </div>
    );
  }

  addItems = () => {
    this.setState( (prevState, props) => {
      let newItems = []

      let n = prevState.list.length
      for (let i=n; i < n + 10; i++) {
        newItems.push(i)
      }

      return {
        list: [ ...prevState.list, ...newItems ]
      }
    })
  }
}

export default App;
