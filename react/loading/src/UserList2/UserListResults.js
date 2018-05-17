import React from 'react';

import UserListView from './UserListView'

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

  return <UserListView users={results}/>
}

export default UserListResults
