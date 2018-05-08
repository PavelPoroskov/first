import React, { Component } from 'react';

import CompState from './CompState'
import LastUpdate from '../LastUpdate'

export default 
class CompStateParent extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      valueComp: 0
    }
    this.form ={
      valueComp: 0
    }
    this.css_switch = false

    this.onChangeValueComp = this.onChangeValueComp.bind(this)
    //this.onChange = this.onChange.bind(this)
  }

  onChangeValueComp(value) {
    // this.setState({
    //   valueComp: value
    // })
    this.form = {
      ...this.form,
      ...value
    }
  }
  // onChange(obj) {
  //   this.setState((prevState, props) => ({...prevState, ...obj}))
  // }
  render() {
    console.log('render CompStateParent')

    const {valueComp} = this.state

    this.css_switch = !this.css_switch

    return (
      <div className='Parent NewState'>
        <div>CompStateParent</div>
        <LastUpdate from={new Date()} />
        <CompState value={valueComp} onChangeUp={this.onChangeValueComp}/>
      </div>
    )
  }
}
