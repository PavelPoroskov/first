import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {actRequestUser} from '../actions'

import Container01Save from './Container01Save'

class UserRequesLoad extends React.Component {
  static propTypes = {
    requestData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType( [PropTypes.string, PropTypes.object, PropTypes.bool] ),
    user: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.props.requestData(this.props.match.params.userid)
  }  
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('render UserRequesLoad')
  //   console.dir(nextProps)    
  // }
  render() {
    console.log('render UserRequesLoad')

    const { error, user, isLoading } = this.props

    if (error) {
      return <span>Something is not right!</span>;
    }
    if (isLoading) {
      return <span>Loading...</span>;
    }
//    if (!user || user.length === 0) {
    if (!user) {
      return <span>No Results Found</span>;
    }
    return <Container01Save user={user}/>
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.data,
  error: state.user.errorLoad,
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestData: (id) => {
    dispatch(actRequestUser(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRequesLoad)
