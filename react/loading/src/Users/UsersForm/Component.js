import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import UsersListView from '../UsersListView'
//import UsersListView from '../UsersListViewSwap'

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
    const { match: {url}} = this.props

    return (
      <div className='content'>
        <div className='sub-h1'>
          Users
        </div>

        <div className='controls'>
          <label>
            Filter
            <input type='text' onChange={this.onChangeFilter} />
          </label>

          <Link to={`${url}/new`}>New user</Link>
        </div>

        <UsersListView baseurl={url}/>
      </div>
    )
  }
}
