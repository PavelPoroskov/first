import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
//import logo from './logo.svg';

import Component from './components/Component'
import ComponentRender from './components/ComponentRender'
//import ComponentComponent from './components/ComponentComponent'

import './App.css';

class App extends React.Component {
  state = {value: 0}

  onClick = () => {
    this.setState( (prevState, props) => ({value: prevState.value + 1}) )
  }

  render() {
    const {value} = this.state

    const d = new Date()
    const strTm = d.toString()

    console.log('render()  App: ' )

    return (
      <Router>
        <div className="App">
          <button onClick={this.onClick}> State + 1 </button>
            {value}
            <Route component={Component} />
            <Route render={props => <ComponentRender {...props} name={strTm}/>} />
            {/*
            <Route component={props => <ComponentComponent {...props} name={strTm}/>} />
            */}
            {/*
            <Route children={props => {}} />
            */}
        </div>
      </Router>
    );
  }
}

export default App;
