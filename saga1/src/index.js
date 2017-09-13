import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers';
import mySaga from './sagas'


//ReactDOM.render(<App />, document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware()
const store = createStore( reducer, applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(mySaga)

ReactDOM.render(<Provider store={store}>
   				  <App />
  				</Provider>, 
  				document.getElementById('root'));

//registerServiceWorker();
