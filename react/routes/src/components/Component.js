
import React from 'react';

export default
class Component extends React.Component {

  componentDidMount() {
    console.log('componentDidMount()  Component: ' )    
  }
  render() {
    console.log('render()  Component: ' )
    console.log(this.props)

    return (
      <div className="Component">
        Component
      </div>
    );
  }
  componentWillUnmount() {
    console.log('componentWillUnmount()  Component: ' )    
  }
}
