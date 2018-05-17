import React from 'react';
import PropTypes from 'prop-types'

class UserListView extends React.Component { 
  static propTypes = {
    users: PropTypes.array.isRequired
  }
  render() {
    console.log('render UserListView')

    const {users} = this.props

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