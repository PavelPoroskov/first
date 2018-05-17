import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Container01Save from './Container01Save'

class UserLoadResult extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    //error: PropTypes.string,
    user: PropTypes.object
  }
  render() {
    console.log('render User Result')

    const { error, user, isLoading } = this.props

    if (error) {
      return <span>Something is not right!</span>;
    }

    if (isLoading) {
      return <span>Loading...</span>;
    }

    // if (!user || user.length === 0) {
    //   //todo: for new user
    //   return <span>No Results Found</span>;
    // }

    return <Container01Save user={user}/>
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.data,
  error: state.user.errorLoad,
  isLoading: state.user.isLoading
})

export default connect(mapStateToProps)(UserLoadResult)