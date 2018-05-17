import {connect} from 'react-redux'

import {actRequestSaveUser} from '../actions'

import Component from './Component'

const validateData = (obj) => {
  let errs = []

  if (!obj['name']) {
    errs.push('Field Name must not be empty.')
  }

  return errs
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveData: (obj) => {
    const errs = validateData(obj)
    if (0 < errs.length) {
      return errs
    }

    dispatch(actRequestSaveUser(obj))
  }
})

export default connect(null, mapDispatchToProps)(Component)
