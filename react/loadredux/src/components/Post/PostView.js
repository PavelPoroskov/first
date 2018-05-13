import React from 'react';

export default
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
