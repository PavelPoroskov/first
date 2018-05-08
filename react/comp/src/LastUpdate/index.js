import React, { Component } from 'react';

export default 
class LastUpdate extends Component {
  constructor(props) {
    super(props)
    
    // this.state ={
    //   from: props.from,
    //   after: 0
    // }
    this.state = {}

    this.formatDate = this.formatDate.bind(this)

    console.log('      LastUpdate constructor ')
  }
  //state don't update wihtout this
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('      LastUpdate getDerivedStateFromProps ' + nextProps.from)
    return {from: nextProps.from}
  }
  componentDidMount() {
    console.log('      LastUpdate componentDidMount ')
  }

  formatDate(d) {
    return d.toLocaleString()
  }
  render() {
    //console.log('render LastUpdate')

    const {from} = this.state
    const strDate = this.formatDate(from)

    return (
      <div className='LastUpdate'>
        <span>{strDate}</span>
        <span> - last update</span>
      </div>
    )
  }
}
