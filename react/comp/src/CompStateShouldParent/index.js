import React, { Component } from 'react';

import CompStateShould from './CompStateShould'
import LastUpdate from '../LastUpdate'


export const isEqualObj = (o1, o2, arExcept,isDeep) => {
  // if (o1 === o2) {
  //   return true
  // } else {    
  //   if (typeof o1 === 'object' &&  typeof o2 === 'object') {

  //   } else {
  //     return false
  //   }
  // }
  if (typeof o1 === 'object' &&  typeof o2 === 'object') {

  } else {
    return (o1 === o2)
  }

  exceptObj = {}
  if (arExcept) {
    exceptObj = arExcept.reduce((oSum,fieldName) => {
      oSum[fieldName] = true
      return oSum
    }, {})
  }

  let allKeys = Object.keys(o1).reduce( (objSum, key) => {
    if (!(key in exceptObj)) {
      objSum[key] = true
    }
    return objSum 
  }, {} )
  allKeys = Object.keys(o2).reduce( (objSum, key) => {
    if (!(key in exceptObj)) {
      objSum[key] = true
    }
    return objSum 
  }, allKeys )

  //Object.keys(allKeys).forEach(key => {
  for (let key of Object.keys(allKeys)) {
    // console.log(key)
    if (o1[key] !== o2[key]) {
      if (typeof o1[key] === 'object' &&  typeof o2[key] === 'object') {
        if (isDeep) {
          if (!isEqualObj(o1[key], o2[key])) {
            return false
          }
        }else{        
          return false          
        }
      } else {
        return false
      }
    }
  }

  // console.log('isEqualObj return true')
  return true
}

export default 
class CompStateShouldParent extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      valueComp: 0
    }
    this.css_switch = false

    this.onChangeValueComp = this.onChangeValueComp.bind(this)
    //this.onChange = this.onChange.bind(this)
  }

  onChangeValueComp(value) {
    this.setState({
      valueComp: value
    })
  }
  // onChange(obj) {
  //   this.setState((prevState, props) => ({...prevState, ...obj}))
  // }
  shouldComponentUpdate(nextProps, nextState) {

    // if (nextState !== this.state) {
    //   return true
    // }
    // if (nextProps !== this.props) {
    //   return true
    // }

    if (!isEqualObj(nextState, this.state, ['valueComp']) {
      return true
    }

    return false
  }  
  render() {
    console.log('render CompStateShouldParent')

    const {valueComp} = this.state

    const cssNewState = this.css_switch ? 'NewState' : 'NewState2'
    const cls = `Parent ${cssNewState}`

    this.css_switch = !this.css_switch

    return (
      <div className={cls}>
        <div>CompStateShouldParent</div>
        <LastUpdate from={new Date()} />
        <CompStateShould value={valueComp} onChangeUp={this.onChangeValueComp}/>
      </div>
    )
  }
}
