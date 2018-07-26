import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {actNewUser} from '../actions'

import Container01Save from './Container01Save'

class UserNew extends React.Component {
  static propTypes = {
    newUser: PropTypes.func.isRequired,
    //id: PropTypes.string
  }
  constructor (props) {
    super(props)
    this.props.newUser()
  }
  render() {
    console.log('render User New')
    return <Container01Save user={{}}/>
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  newUser: () => {
    dispatch(actNewUser())
  }
})

export default connect(null, mapDispatchToProps)(UserNew)