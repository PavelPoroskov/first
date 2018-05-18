import React from 'react';

const UserListView = ({results}) => {
  return (
    <ul>
      {result.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserListView
