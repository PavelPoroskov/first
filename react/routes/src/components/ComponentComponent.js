
import React from 'react';

export default
class ComponentComponent extends React.Component {

  componentDidMount() {
    console.log('componentDidMount()  ComponentComponent: ' )    
  }
  render() {
    console.log('render()  ComponentComponent: ' )
    console.log(this.props)

    return (
      <div className="Component">
        ComponentComponent
      </div>
    );
  }
  componentWillUnmount() {
    console.log('componentWillUnmount()  ComponentComponent: ' )    
  }
}
