import React from 'react'
import {Route} from 'react-router-dom'
//import {Route, Switch, Redirect} from 'react-router-dom'

import UsersForm from './UsersForm'

export default [
  <Route key='/users' exact path='/users' component={UsersForm} />
]

// export default [
//   <Switch key='/users_switch'>
//     <Route key='/users' exact path='/users' component={UsersForm} />
//     <Redirect to='/users'/>
//   </Switch>
// ]