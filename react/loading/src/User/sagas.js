import { takeLatest, select, take, put, call } from 'redux-saga/effects'

import * as api from '../api'


function * worker (action) {
  // while (true) {
  //   const {substring} = yield take('USERS_LIST_REQUEST')

    const {id} = action
    //console.log('saga user')
    //console.log(id)

    try {
      let userSaved
      if (id === 'new') {
        userSaved = {}
      } else {
        userSaved = yield call(api.findUserById, id)
      }
      console.log('saga user request')
      console.log(userSaved)
      yield put({type: 'USER_SUCCESS', user: userSaved})


      while (true) {
        const {data: userToSave} = yield take('USER_SAVE_REQUEST')

        try {
          let result = {}
          if (userToSave.id) {
            const {id, ...restUserToSave} = userToSave

            const userSaved = yield select(state => state.user.data)

            let userDiff = {}
            Object.keys(restUserToSave).forEach(key => {
              if (restUserToSave[key] !== null && restUserToSave[key] !== undefined
              && !api.isEqualObj(restUserToSave[key], userSaved[key])) {
                userDiff[key] = restUserToSave[key]
              }
            })
            if (0 < Object.keys(userDiff).length) {
              result = yield call(api.updateUser, id, userDiff)
            }
          } else {
            result = yield call(api.addUser, userToSave)
          }
          console.log('saga user save')
          //console.log(result)
          yield put({type: 'USER_SAVE_SUCCESS', user: result})
          //userSaved = { ...userSaved, ...result }

        } catch (error) {
          yield put({type: 'USER_SAVE_ERROR', error})
        // } finally {
        }
      }

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