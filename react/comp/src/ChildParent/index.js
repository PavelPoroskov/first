import React, { Component } from 'react';

import Child from './Child'
import LastUpdate from '../LastUpdate'

export default 
class ChildParent extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      valueComp: '0'
    }

    // this.onChangeValueComp = this.onChangeValueComp.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  // onChangeValueComp(value) {
  //   this.setState({
  //     valueComp: value
  //   })
  // }
  onChange(obj) {
    this.setState((prevState, props) => ({...prevState, ...obj}))
  }
  render() {
    console.log('render ChildParent')

    const {valueComp} = this.state

    return (
      <div className='Parent'>
        <div>ChildParent</div>
        <LastUpdate from={new Date()} />
        <Child value={valueComp} onChangeUp={this.onChange}/>
      </div>
    )
  }
}
