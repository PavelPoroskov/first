import React from 'react'
import PropTypes from 'prop-types'

import UserEdit from '../UserEdit'

//import './styles.css'

export default
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

    return <UserEdit/>
    )
  }
}
