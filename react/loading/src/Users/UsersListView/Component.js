import React from 'react';
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

class UserListView extends React.Component { 
  static propTypes = {
    users: PropTypes.array.isRequired
  }
  render() {
    console.log('render UserListView')

    const {users, baseurl: url} = this.props

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${url}/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default UserListView