import { all } from 'redux-saga/effects'

import users from './Users/sagas'
// import user_get from './User/sagas/get'
// import user_save from './User/sagas/save'
import user from './User/sagas'
//import getUsersList from './users'
// import doUser from './user'

export default function * rootSaga () {
  yield all([
    users(),
    user()
    //getUsersList()//, 
    //doUser(),
  ])
}