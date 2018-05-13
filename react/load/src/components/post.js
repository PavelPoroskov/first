import React from 'react'
import PropTypes from 'prop-types'
import {dataFetcher} from "../data-fetcher"

export class Post extends React.Component {
  
  componentDidMount() {
    if(!this.context.state.body) {
      dataFetcher('https://jsonplaceholder.typicode.com/posts/1')
    }
  }
  
  render() {
    const {title, body} = this.context.state
      return (
        <React.Fragment>
          <p><strong>Here's the data I got:</strong></p>
          <p>{title}</p>
          <p>{body}</p>
        </React.Fragment>
      )
  }
}

Post.contextTypes = {
  state: PropTypes.any
};