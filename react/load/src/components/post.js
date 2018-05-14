import React from 'react'
import PropTypes from 'prop-types'
import {dataFetcher} from "../data-fetcher"

export class Post extends React.Component {
  
  componentDidMount() {
    if(!this.context.state.body) {
      console.log('Post componentDidMount ')
      dataFetcher('https://jsonplaceholder.typicode.com/posts/1')

      // .then(d => d)
      // .catch(e => e)

//      throw new Error('I crashed!');
      
      // const url = 'https://jsonplaceholder.typicode.com/posts/1'
      // throw new Promise((resolve, reject) => {
      //     fetch(url).then(response => {
      //       if (response.ok) {
      //         // fake latency for demo purposes
      //         setTimeout(() => resolve(response.json()), 2000)
      //       } else {
      //         reject(new Error('error'))
      //       }
      //     })
      //     .catch(error => {
      //       reject(new Error(error.message))
      //     })
      //   })
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