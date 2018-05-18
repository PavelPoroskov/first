
import { takeLatest, put, call, select } from 'redux-saga/effects'

import * as api from '../../api'

function * worker (action) {
  // while (true) {
  //   const {substring} = yield take('USERS_LIST_REQUEST')

    const {data: user} = action

    try {
      let result = {}
      if (user.id) {
        const {id, ...restUser} = user

        const savedUser = yield select(state => state.user.data)

        let diffUser = {}
        Object.keys(restUser).forEach(key => {
          if (restUser[key] !== null && restUser[key] !== undefined
          && !api.isEqualObj(restUser[key], savedUser[key])) {
            diffUser[key] = restUser[key]
          }
        })
        if (0 < Object.keys(diffUser).length) {
          result = yield call(api.updateUser, id, diffUser)
        }
      } else {
        result = yield call(api.addUser, user)
      }
      console.log('saga user save')
      console.log(result)
      yield put({type: 'USER_SAVE_SUCCESS', user: result})
    } catch (error) {
      yield put({type: 'USER_SAVE_ERROR', error})
    // } finally {
    }
  // }
}

function * watcher () {
  yield takeLatest('USER_SAVE_REQUEST', worker)
}

export default watcher