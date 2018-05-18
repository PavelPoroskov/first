import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

//import logo from './logo.svg';
import Users from './Users'
import User from './User'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/users/:userid' component={User} />
          <Route path='/users' component={Users} />
          <Redirect to='/users' />
        </Switch>
      </Router>
    )
  }
}

export default App;
