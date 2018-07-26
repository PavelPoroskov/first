
import React, { Component } from 'react';

export default
class Comp1 extends Component {
  constructor(props) {
    super(props)

    console.log('Comp1 constructor')
  }
  componentDidMount () {

    console.log('Comp1 ComponentDidMount')
  }

  render() {
    console.log('Comp1 render')

    return (
      <div>
        <div>Comp1 render</div>
      </div>
    );
  }
}

