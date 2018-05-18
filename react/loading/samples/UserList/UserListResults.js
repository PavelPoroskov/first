import React from 'react';

const UserListResults = ({ error, results, isLoading }) => {
  if (error) {
    return <span>Something is not right!</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!results.length) {
    return <span>No Results Found</span>;
  }

  return (
    <ul>
      {result.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserListResults
