import { all } from 'redux-saga/effects'

import users from './Users/sagas'
//import getUsersList from './users'
// import doUser from './user'

export default function * rootSaga () {
  yield all([
    users()//,
    //getUsersList()//, 
    //doUser(),
  ])
}