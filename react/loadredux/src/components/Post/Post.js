import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestAction, successAction } from '../../actions'

//??
import store from '../../store'

import PostView from './PostView'


function fetchPosts(url) {
  return dispatch => {
    dispatch(requestAction())
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        // fake latency
        setTimeout(() => dispatch(successAction(json)), 2000)
      })
  }
}
 
const dataSelector = (state) => state.data

const createWaiter = (store, stateSelector) => () => {
  const state = stateSelector(store.getState())
  // as this method is called each time we mount our compoment we need to return early, when our data has loaded
  if (!state.isLoading) {
    if (state.error != null) {
      throw state.error
    }

    return dataSelector(state)
  }

  // if our data isn't ready, then we can throw our promise to kick us into the loading state
  throw new Promise((resolve, reject) => {
    const unsubscribe = store.subscribe(() => {
      const state = stateSelector(store.getState())
      if (!state.isLoading) {
        if (state.error != null) {
          unsubscribe()
          return reject()
        }

        unsubscribe()
        return resolve()
      }
    })
  })
  }

const waitForData = createWaiter(
  store,
  (state) => state,
)

// Connect App to Redux Store
export default
connect(
  store => ({
    // Pass store.modal as a prop
    data: waitForData()
  }), 
  dispatch => bindActionCreators({fetchPosts}, dispatch)
  // dispatch => ({
  //   fetchPosts: url => {      
  //     dispatch(requestAction())
  //     return fetch(url)
  //       .then(response => response.json())
  //       .then(json => {
  //         // fake latency
  //         console.log('fake latency')
  //         setTimeout(() => dispatch(successAction(json)), 2000)
  //       })
  //   }
  // })
)(PostView);
