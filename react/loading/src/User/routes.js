import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {UserEdit, UserNew} from './UserEdit'

export default [
  <Switch key='/user_switch'>
    <Route key='/users/new' path='/users/new' component={UserNew} />
    <Route key='/users/edit' path='/users/:userid' component={UserEdit} />
  </Switch>
]