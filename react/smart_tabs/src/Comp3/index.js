
import React, { Component } from 'react';

export default
class Comp3 extends Component {
  constructor(props) {
    super(props)

    console.log('Comp3 constructor')
  }
  componentDidMount () {
    
    console.log('Comp3 ComponentDidMount')
  }

  render() {
    console.log('Comp3 render')

    return (
      <div>
        <div>Comp3 render</div>
      </div>
    );
  }
}

