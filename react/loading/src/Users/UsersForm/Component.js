import React from 'react'
import PropTypes from 'prop-types'

import UsersListView from '../UsersListView'

import './styles.css'

export default
class UsersForm extends React.Component {
  static propTypes = {
    requestData: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.onChangeFilter = this.onChangeFilter.bind(this)

    //this.onChangeFilter()
    this.props.requestData(null)
  }

  onChangeFilter(event) {
    const oFilter = event.target.value
    //console.log('UserList onChangeFilter')
    this.props.requestData(oFilter)
  }

  render () {
    console.log('render UsersForm')

    return (
      <div className='content'>
        <div className='sub-h1'>
          Users
        </div>

        <div className='content-header'>
          Filter
          <input type='text' onChange={this.onChangeFilter} />
        </div>

        <UsersListView/>
      </div>
    )
  }
}
