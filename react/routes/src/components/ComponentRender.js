
import React from 'react';

export default
class ComponentRender extends React.Component {

  componentDidMount() {
    console.log('componentDidMount()  ComponentRender: ' )    
  }
  render() {
    console.log('render()  ComponentRender: ' )
    console.log(this.props)

    return (
      <div className="Component">
        ComponentRender
      </div>
    );
  }
  componentWillUnmount() {
    console.log('componentWillUnmount()  ComponentRender: ' )    
  }
}
