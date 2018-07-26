import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import UserListView from './Component'

class UserLoadResult extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    //error: PropTypes.string,
    data: PropTypes.array
  }
  // step: 
  //   -0 -- begin
  //   1 -- loading
  //   2 -- result
  constructor(props){
    super(props)

    const beginMS = Date.now()
    this.state = {
//      step: 0,
      step: 1,
      msLastChange: beginMS,
      //msLastToRender: beginMS,
      msBefore: 0
    }
    this.timeoutId = null //timeoutId
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { error, data, isLoading } = nextProps

    let step = 0
    if (isLoading) {
      step = 1
    } else if (error || data) {
      step = 2
    }

    if (step !== prevState.step) {
      const msNow = Date.now()
      let resObj = { msLastChange: msNow }
      let msDelta = msNow - prevState.msLastChange
      if (1000 <= msDelta || step === 2) {
        resObj['step'] = step
        //resObj['msLastToRender'] = msNow
        resObj['msBefore'] = 0
        resObj['nextStep'] = null
      } else {
        resObj['msBefore'] = 1000 - msDelta
        resObj['nextStep'] = step
      }
      return resObj
    }

    return null
  }
  shouldComponentUpdate(nextProps,nextState) {

    if (nextState.step !== this.state.step) {
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
      return true;
    }
//    if (nextState.msLastChange !== this.state.msLastChange) {
    if (nextState.msBefore) {

      this.timeoutId = setTimeout(function () {
        this.setState((prevState,props) => {
          if (prevState.step < nextState.nextStep) {
            return {
              step: nextState.nextStep,
              msLastChange: Date.now(),
              msBefore: 0
            } 
          }
        })
      }.bind(this), nextState.msBefore );
    }

    return false    
  }
  render() {
    const { error, data, isLoading, ...restProps } = this.props
    console.log('render UserListResults')

    if (error) {
      return <span>Something is not right!</span>;
    }

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (!data || !data.length) {
      return <span>No Results Found</span>;
    }

    return <UserListView users={data} {...restProps} />
  }
  componentWillUnmount(){
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId)
      this.timeoutId = null
    }
  }
}

const mapStateToProps = (state, props) => ({
  data: state.users.data,
  error: state.users.errorLoad,
  isLoading: state.users.isLoading
})

export default connect(mapStateToProps)(UserLoadResult)