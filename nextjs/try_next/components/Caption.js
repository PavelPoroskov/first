import React from 'react';
//import css from 'next/css';

// let p = css({
//   color: '#858576',
//   fontSize: 32
// });
let styles = {
  color: 'red',
  fontSize: 32
}

export default ({caption}) => <p style={styles}>{caption}</p>