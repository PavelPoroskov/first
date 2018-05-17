import { takeLatest, put, call } from 'redux-saga/effects'

import * as api from '../../api'


function * worker (action) {
  // while (true) {
  //   const {substring} = yield take('USERS_LIST_REQUEST')

    const {id} = action

    try {
      let user
      if (id !== 'new') {
        user = yield call(api.findUserById, id)
      } else {
        user = {}
      }
      console.log('saga user')
      console.log(user)
      yield put({type: 'USER_SUCCESS', user})
    } catch (error) {
      yield put({type: 'USER_ERROR', error})
    // } finally {
    }
  // }
}

function * watcher () {
  yield takeLatest('USER_REQUEST', worker)
}

export default watcher