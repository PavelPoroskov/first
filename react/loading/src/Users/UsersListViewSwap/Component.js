import React from 'react';
import PropTypes from 'prop-types'

class UserListView extends React.Component { 
  static propTypes = {
    users: PropTypes.array.isRequired
  }
  // state = {}
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('UserListView getDerivedStateFromProps')

  //   const {users} = nextProps
  //   if (prevState.users !== users) {
  //     return {users}
  //   }

  //   console.log('not')
  //   return null
  // }
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.users !== nextProps.users)
  }
  render() {
    console.log('render UserListView')

    const {users} = this.props
//    const {users} = this.state

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UserListView