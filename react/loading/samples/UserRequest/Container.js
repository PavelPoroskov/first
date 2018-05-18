import {connect} from 'react-redux'

import {actRequestUser} from '../actions'

import Component from './Component'

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestData: (id) => {
    dispatch(actRequestUser(id))
  }
})

export default connect(null, mapDispatchToProps)(Component)
