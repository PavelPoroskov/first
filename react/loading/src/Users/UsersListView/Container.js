import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import UserListView from './Component'

class UserListResults extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    //error: PropTypes.string,
    users: PropTypes.array
  }
  render() {
    const { error, users, isLoading, ...restProps } = this.props
    console.log('render UserListResults')
    console.log(this.props)

    if (error) {
      return <span>Something is not right!</span>;
    }

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (!users.length) {
      return <span>No Results Found</span>;
    }

    return <UserListView users={users} {...restProps} />
  }
}

const mapStateToProps = (state, props) => ({
  users: state.users.data,
  error: state.users.error,
  isLoading: state.users.isLoading
})

export default connect(mapStateToProps)(UserListResults)