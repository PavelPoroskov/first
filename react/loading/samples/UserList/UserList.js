import React from 'react';

const UserList = ({ isLoading, results, error }) => (
  <div>
    <h1>Users</h1>
    <a href="/users/create">New User</a>
  </div>
  <div>
    <UserListResults
      error={error}
      results={results}
      isLoading={isLoading}
    />
  </div>
)

export default UserList