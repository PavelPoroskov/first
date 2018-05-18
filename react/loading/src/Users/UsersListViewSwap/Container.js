import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import UserListView from './Component'

import './styles.css'

class UserListResults extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    //error: PropTypes.string,
    users: PropTypes.array
  }
  state = {
    showList: false,
    users_upd: []
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('UserListResults getDerivedStateFromProps')

    const {isLoading, error, users} = nextProps
    const showList = !isLoading && !error && users && 0 < users.length
    if (prevState.showList !== showList) {
      let obj = {showList}
      if (showList) {
        obj['users_upd'] = users
        console.log(users)
      }
      return obj
    }

    return null
  }
  render() {
    console.log('render UserListResults')

    const {error, users, isLoading} = this.props
    const {showList, users_upd} = this.state
    //console.log(users)

    let StateRequest = null
    if (!showList) {
      if (error) {
        StateRequest = 'Something is not right!'
      }
      if (isLoading) {
        StateRequest = 'Loading...'
      }
      // if (!users.length) {
      if (users && !users.length) {
        StateRequest = 'No Results Found'
      }
    } else {
      console.log('render UserListResults showList ' + showList)
    }

    let clsState = `SwapState ${!showList ? 'visible' : ''}`
    let clsList = `SwapState ${showList ? 'visible' : ''}`

    return (
      <div className='SwapStateList'>
        <div className={clsState}>
          <div>{StateRequest}</div>
        </div>
        <div className={clsList}>
          <UserListView users={users_upd} className='SwapResult'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  users: state.users.data,
  error: state.users.error,
  isLoading: state.users.isLoading
})

export default connect(mapStateToProps)(UserListResults)