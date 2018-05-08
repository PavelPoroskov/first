import React, { Component } from 'react';

import LastUpdate from '../../LastUpdate'

export default 
class Comp extends Component {
  constructor(props) {
    super(props)
    
    this.change = this.change.bind(this)
  }
  change(e) {
    this.props.onChangeUp(e.target.value)
  }
  render() {
    console.log('render Comp')

    const {value} = this.props
    const newD = new Date()

    return (
      <div className={`Comp ${'NewState'}`}>
        <div>Comp</div>
        <LastUpdate from={newD} />
        <div>
          <span>{value}</span>
          <input type='text' value={value} onChange={this.change} />
        </div>
      </div>
    )
  }
}
