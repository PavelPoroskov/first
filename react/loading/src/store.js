import { createStore as createStoreRedux, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import reducers from './reducers'

const createStore = () => {

  const sagaMiddleware = createSagaMiddleware()

  const store = createStoreRedux(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default createStore