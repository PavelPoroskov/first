import React from 'react'
import PropTypes from 'prop-types'

export class DataProvider extends React.Component {

  getChildContext() {
    return {
      state: this.props.data || {}
    };
  }
  
  render() {
    return this.props.children;
  }
  
}
DataProvider.childContextTypes = {
  state: PropTypes.any
};