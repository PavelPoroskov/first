import React, { Component } from 'react';

import LastUpdate from '../../LastUpdate'

export default 
class CompState extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: props.value
    }

    this.Change = this.Change.bind(this)
  }
  Change() {
    this.setState(
      (prevState,props) => ({value: prevState.value + 1}),
      (a1,a2,a3,a4) => {
        console.log('setState callback')
        console.log(a1)
        console.log(a2)
        console.log(a3)
        console.log(a4)

        this.props.onChangeUp(this.state)
      }
    )
  }
  render() {
    console.log('render Child')

    const {value} = this.state

    return (
      <div className='Comp'>
        <div>Child</div>
        <LastUpdate from={new Date()} />
        <div>
          <span>{value}</span>
          <button onClick={this.Change}>Inc</button>
        </div>
      </div>
    )
  }
}
