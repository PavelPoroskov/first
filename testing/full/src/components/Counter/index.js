import React from 'react'
import PropTypes from 'prop-types'

export default
function Counter({counter}) {
  return (
    <p data-testid='counter'>{counter}</p>
  )
}

Counter.propTypes = {
  counter: PropTypes.number
}
