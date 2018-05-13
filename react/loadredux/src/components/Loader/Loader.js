import React from 'react';

import IsLoading from './IsLoading'

const Loader = (props) => (
  <IsLoading>
    {(loading) => (loading ? 'Loading...' : props.children)}
  </IsLoading>
)

export default Loader