import React from 'react';

export default
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