import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types'
import { fetchPosts } from './actions'
import Posts from './components/Posts'


class App extends Component {

  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  handleRefreshClick = e => {
    e.preventDefault()

    // const { dispatch, selectedReddit } = this.props
    // dispatch(invalidateReddit(selectedReddit))
    // dispatch(fetchPostsIfNeeded(selectedReddit))

    // const { userId, dispatch } = this.props
    // dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
    
    this.props.dispatch( fetchPosts() )
  }

  render() {
    const { posts, isFetching, lastUpdated } = this.props
//    const isEmpty = posts.length === 0
    const isEmpty = !posts || posts.length === 0
    return (      
      <div className="App">
        {lastUpdated &&
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            {' '}
          </span>
        }
        <button onClick={this.handleRefreshClick}>
          Refresh
        </button>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const { posts, isFetching, lastUpdated } = state

//  console.log(state);

  return {
    posts,
    isFetching,
    lastUpdated
  }
}

//export default App;
export default connect(mapStateToProps)(App)
