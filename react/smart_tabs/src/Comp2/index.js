
import React, { Component } from 'react';

export default
class Comp2 extends Component {
  constructor(props) {
    super(props)

    console.log('Comp2 constructor')
  }
  componentDidMount () {
    
    console.log('Comp2 ComponentDidMount')
  }

  render() {
    console.log('Comp2 render')

    return (
      <div>
        <div>Comp2 render</div>
      </div>
    );
  }
}

