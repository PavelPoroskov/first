import React, { Component } from 'react';

import CompUnContr from './CompUnContr'
import LastUpdate from '../LastUpdate'

export default 
class CompUnContrParent extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      valueComp: 0
    }

    this.onChangeValueComp = this.onChangeValueComp.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChangeValueComp(value) {
    this.setState({
      valueComp: value
    })
  }
  // onChange(obj) {
  //   this.setState((prevState, props) => ({...prevState, ...obj}))
  // }
  render() {
    console.log('render CompUnContrParent')

    const {valueComp} = this.state

    return (
      <div className='Parent'>
        <div>CompUnContrParent</div>
        <LastUpdate from={new Date()} />
        <CompUnContr value={valueComp} onChangeUp={this.onChangeValueComp} />
      </div>
    )
  }
}
