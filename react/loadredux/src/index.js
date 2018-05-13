import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'

// import store from './store'

// import App from './components/App';

// import './index.css';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, 
//   document.getElementById('root'));
// //registerServiceWorker();



// Imports 
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// Set InitialState
const initialState = {
  isLoading: false,
  data: {},
}


// ActionTypes:
const REQUEST_DATA = 'REQUEST_DATA';
const SUCCESS_DATA = 'SUCCESS_DATA';


// Actions:
const requestAction = (payload) => ({
    type: REQUEST_DATA,
    payload
  });

const successAction = (payload) => ({
    type: SUCCESS_DATA,
    payload
  });


// Reducer
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isLoading: true };
    case SUCCESS_DATA:
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
}

// Create Redux Store
const store = createStore(dataReducer, applyMiddleware(thunk, logger));

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
 

class IsLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false }
  }

  async componentDidCatch(e) {
    if (e instanceof Promise) {
      this.setState({ isLoading: true })
      await e
      this.setState({ isLoading: false })
    } else {
      throw e
    }
  }

  render() {
    return this.props.children(this.state.isLoading)
  }
}

const Loader = (props) => (
  <IsLoading>
    {(loading) => (loading ? 'Loading...' : props.children)}
  </IsLoading>
)

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



class PostView extends React.Component{
  
  componentDidMount() {
    if(!this.props.data.body)
      // fire action to get data
      this.props.fetchPosts('https://jsonplaceholder.typicode.com/posts/1')
  }
  
  render() {
    const {title, body} = this.props.data
    return (
      <React.Fragment>
        <p><strong>Here's the data I got:</strong></p>
        <p>{title}</p>
        <p>{body}</p>
      </React.Fragment>
    )
  }
}

// Connect App to Redux Store
const Post = connect(
  store => ({
    // Pass store.modal as a prop
    data: waitForData()
  }), 
  dispatch => bindActionCreators({fetchPosts}, dispatch)
)(PostView);


// Render App
ReactDOM.render(
  <Provider store={store}>
    <Loader>
      <div>
        <div>
          <div>
            <Post />
          </div>
        </div>
      </div>
    </Loader>
  </Provider>, document.getElementById('root'));