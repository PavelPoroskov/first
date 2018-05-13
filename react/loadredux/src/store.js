
//import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'

// Create Redux Store
//const store = createStore(rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store