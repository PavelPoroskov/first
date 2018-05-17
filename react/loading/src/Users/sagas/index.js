import { takeLatest, put, call } from 'redux-saga/effects'

import * as api from '../../api'


function * worker (action) {
  // while (true) {
  //   const {substring} = yield take('USERS_LIST_REQUEST')

    const {substring} = action

    try {
      let users = yield call(api.findUsers)
      console.log('saga users')
      console.log(users)
      if (substring) {
        const lowstr = String(substring).toLowerCase()
        users = users.filter(user => 
          String(user.name).toLowerCase().indexOf(lowstr) !== -1)
      }
      yield put({type: 'USERS_LIST_SUCCESS', users})
    } catch (error) {
      yield put({type: 'USERS_LIST_ERROR', error})
    // } finally {
    }
  // }
}


function * watcher () {
  yield takeLatest('USERS_LIST_REQUEST', worker)
}

export default watcher