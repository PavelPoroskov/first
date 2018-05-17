import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {actRequestUser} from '../actions'

import Container02LoadResult from './Container02LoadResult'
//import './styles.css'

class UserRequest extends React.Component {
  static propTypes = {
    requestData: PropTypes.func.isRequired,
    id: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.props.requestData(this.props.id)
  }

  render () {
    console.log('render UserRequest')

    return <Container02LoadResult/>
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestData: (id) => {
    dispatch(actRequestUser(id))
  }
})

export default connect(null, mapDispatchToProps)(UserRequest)