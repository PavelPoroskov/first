import React from 'react'
import {DataProvider} from "./data-provider"

class IsLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  async componentDidCatch(e) {
    
    if (e instanceof Promise) {
      this.setState({ isLoading: true });
      const data = await e
      this.setState({ isLoading: false, data })
    } else {
      throw e;
    }
  }
  
  render() {
    return this.props.children(this.state);
  }
}

export const Loader = props => (
  <IsLoading>
    {({isLoading, data}) => (
      isLoading 
      ? "Loading..." 
      : <DataProvider data={data}>{props.children}</DataProvider>
    )}
  </IsLoading>
);