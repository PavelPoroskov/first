import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

//(
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore( reducers, preloadedState)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//)
