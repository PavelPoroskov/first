import React, { Component } from 'react';

import LastUpdate from '../../LastUpdate'

export default 
class CompState extends Component {
  constructor(props) {
    super(props)
    
    // this.state = {
    //   value: props.value
    // }
    this.state = {}

    this.Change = this.Change.bind(this)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log('      LastUpdate getDerivedStateFromProps ' + nextProps.from)
    return {...nextProps}
  }
  Change() {
    this.setState(
      (prevState,props) => ({value: prevState.value + 1}),
      (a1,a2,a3,a4) => {
        // console.log('setState callback')
        // console.log(a1)
        // console.log(a2)
        // console.log(a3)
        // console.log(a4)

        this.props.onChangeUp({ value: this.state.value })
      }
    )
  }
  render() {
    console.log('render CompState')

    const {value} = this.state

    return (
      <div className='Comp NewState'>
        <div>CompState</div>
        <LastUpdate from={new Date()} />
        <div>
          <span>{value}</span>
          <button onClick={this.Change}>Inc</button>
        </div>
      </div>
    )
  }
}
