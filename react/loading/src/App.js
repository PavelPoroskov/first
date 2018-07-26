import React from 'react';

import { Provider } from 'react-redux'
import createStore from './store'

import {
  BrowserRouter as Router//,
  //Switch,
  //Redirect
} from 'react-router-dom'
import routes from './routes'

//console.log(routes)

const routesApp = (Router, routes) => {
  const store = createStore()
  return (
    <Provider store={store}>
      <Router>
        <div>
          {routes}
        </div>
      </Router>
    </Provider>
  )
}

const App = () => routesApp(Router, routes)

export default App;
