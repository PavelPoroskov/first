//todo: backend2form, form2backend
//todo: onLeave


import React from 'react'
import PropTypes from 'prop-types'

//import UsersListView from '../UsersListView'
import * as api from '../../api'

import './styles.css'

export default
class UserForm extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    //validateData: PropTypes.function.isRequired,
    saveData: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    // //deep copy
    // const {ips, ...rest} = this.props.user
    // let ip0 = ips ? ips : []
    // this.formData = {...rest, ips: ip0.slice() }

    this.formData = api.deepCopyObj(this.props.user)

    this.state = {
      validationErrors: [],
      saveErrors: []
    }
  }

  handleInput = (e) => {
    const {name, value} = e.target
    this.formData[name] = value

    this.setState( (prevState, props) => {
      if (prevState.validationErrors.length !== 0) {
        return {validationErrors: []}
      }
    })
  }

  saveData = () => {
    //validate

    const validationErrors = this.props.saveData(this.formData)
    if (0 < validationErrors.length) {
      this.setState({
        validationErrors
      })
    }
  }

  render () {
    console.log('render User Form')
    const {id, name} = this.props.user
    const {validationErrors,saveErrors} = this.state

    return (
      <div className='content'>
        <div className='sub-h1'>
          One User
        </div>

        <div className='form'>
          <label>
            id: {id}
          </label>
          <label>
            Name
            <input name='name' type='text' onChange={this.handleInput} 
              defaultValue={name}
            />
          </label>
          
          <button className='from-btn' onClick={this.saveData}>Save</button>
        </div>

        <div>
          Validation Errors: 
          {validationErrors.map((e, ind) => <div id={ind}>{e}</div>)}
        </div>
        <div>
          Save Errors: 
          {saveErrors.map((e, ind) => <div id={ind}>{e}</div>)}
        </div>
      </div>
    )
  }
}
