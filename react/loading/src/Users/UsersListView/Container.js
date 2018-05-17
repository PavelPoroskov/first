import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import UserListView from './Component'

class UserListResults extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    //error: PropTypes.string,
    users: PropTypes.array.isRequired
  }
  render() {
    console.log('render UserListResults')

    const { error, users, isLoading } = this.props

    if (error) {
      return <span>Something is not right!</span>;
    }

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (!users.length) {
      return <span>No Results Found</span>;
    }

    return <UserListView users={users}/>
  }
}

const mapStateToProps = (state, props) => ({
  users: state.users.data,
  error: state.users.error,
  isLoading: state.users.isLoading
})

export default connect(mapStateToProps)(UserListResults)