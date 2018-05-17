import { connect } from 'react-redux'

import {actRequestUsersList} from '../actions'

import Component from './Component'

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestData: (oFilter) => {
    dispatch(actRequestUsersList(oFilter))
  }
})

export default connect(null, mapDispatchToProps)(Component)
