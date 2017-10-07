import React from 'react';
import ReactDOM from 'react-dom';

class Welcome1 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const Welcome2 = ({name}) => <h1>Hello, {name}</h1>;
//class Welcome2 extends React.Component {
//  render() {
//    return <h1>Hello, {this.props.name}</h1>;
//  }
//}

ReactDOM.render([
  <Welcome1 name="Sara1" />,
  <Welcome2 name="Sara2" />
  ],
  document.getElementById('root')
);

