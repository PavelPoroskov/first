import React, { Component } from 'react';

import Comp from './Comp'
import LastUpdate from '../LastUpdate'

export default 
class CompParent extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      valueComp: 0,
      css_switch: false
    }

    this.onChangeValueComp = this.onChangeValueComp.bind(this)
    //this.onChange = this.onChange.bind(this)
  }

  onChangeValueComp(value) {
    this.setState((prevState,props) => ({
      valueComp: value,
      css_switch: !prevState.css_switch
    }))
  }
  // onChange(obj) {
  //   this.setState((prevState, props) => ({...prevState, ...obj}))
  // }
  render() {
    console.log('render CompParent')

    const {valueComp, css_switch} = this.state

      // <div className='Parent NewState'>
      // <div className={`Parent ${'NewState'}`}>
      // <div className={cls}>
    const cssNewState = css_switch ? 'NewState' : 'NewState2'
    const cls = `Parent ${cssNewState}`
    const newD = new Date()

    return (
      <div className={cls}>
        <div>CompParent</div>
        <LastUpdate from={new Date()} />
        {/*}
        <LastUpdate from={newD} />
        */}
        <Comp value={valueComp} onChangeUp={this.onChangeValueComp}/>
        {/*
        */}
      </div>
    )
  }
}
