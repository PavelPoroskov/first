import React from 'react'
import {DataProvider} from "./data-provider"

class IsLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false,
      data: {},
//      didMount: false
      haveError: false
    };

    console.log('IsLoading constructor')
  }

  //async componentDidCatch(e) {
  componentDidCatch(e,info) {
    
    console.log('componentDidCatch')
    console.log(e)

    //this.setState({ haveError: true });

    if (e instanceof Promise) {
      this.setState({ isLoading: true });
      // const data = await e
      // this.setState({ isLoading: false, data })
      
      // e.then(data => {
      //   this.setState({ isLoading: false, data })  
      // })      

      e.then((data) => this.setState({ isLoading: false, data }));

      // try {
      //   this.setState({ isLoading: true });
      //   const data = await e
      //   this.setState({ isLoading: false, data })
      // }catch (err) {
      //   console.log('componentDidCatch catch')
      // }
    } else {
      console.log('componentDidCatch else')
      throw e;
    }
  }
  
  componentDidMount() {
    console.log('IsLoading componentDidMount')
//    this.setState({ didMount: true });
  }
  render() {
    console.log('IsLoading render')
    // if (!this.state.haveError) {
    //   return null
    // }
    console.log('IsLoading render 2')

    // if (this.state.isLoading) {
    //   return "Loading ... 123"
    // }

    return this.props.children(this.state);
  }
  componentWillUnmount() {
    console.log('IsLoading componentWillUnmount')
  }
}

//export const Loader = props => (
export class Loader extends React.Component {
  render() {
    const props = this.props
    return (
      <IsLoading>
        {({isLoading, data}) => (
          isLoading 
          ? "Loading..." 
          : <DataProvider data={data}>{props.children}</DataProvider>
        )}
      </IsLoading>
    )
  }
}