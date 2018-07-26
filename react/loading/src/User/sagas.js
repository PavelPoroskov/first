import { takeLatest, select, take, put, call } from 'redux-saga/effects'
//import { takeLatest, take, put, call } from 'redux-saga/effects'

import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
  USER_NEW,
  
  USER_SAVE_REQUEST,
  USER_SAVE_SUCCESS,
  USER_SAVE_ERROR,
} from './actions'

import * as api from '../api'


function * worker (action) {
  // while (true) {
  //   const {substring} = yield take('USERS_LIST_REQUEST')

    const {id, type} = action
    //console.log('saga user')
    //console.log(id)

    try {
      if (type === USER_REQUEST) {
        let userSaved = yield call(api.findUserById, id)
        console.log('saga user request')
        console.log(userSaved)
        yield put({type: USER_SUCCESS, user: userSaved})
      }


      while (true) {
        const {data: userToSave} = yield take(USER_SAVE_REQUEST)

        try {
          let result = {}
          if (userToSave.id) {
            const {id, ...restUserToSave} = userToSave

            const userSaved = yield select(state => state.user.data)

            let userDiff = {}
            const arKeys = Object.keys(restUserToSave)
            for (let key of arKeys) {
              if (restUserToSave[key] !== null && restUserToSave[key] !== undefined
              && !api.isEqualObj(restUserToSave[key], userSaved[key])) {
                userDiff[key] = restUserToSave[key]
              }
            }
            if (0 < Object.keys(userDiff).length) {
              result = yield call(api.updateUser, id, userDiff)
            }
          } else {
            result = yield call(api.addUser, userToSave)
          }
          console.log('saga user save')
          console.log(result)
          yield put({type: USER_SAVE_SUCCESS, user: result})
          //userSaved = { ...userSaved, ...result }

        } catch (error) {
          yield put({type: USER_SAVE_ERROR, error})
        // } finally {
        }
      }

    } catch (error) {
      yield put({type: USER_ERROR, error})
    // } finally {
    }
  // }
}

function * watcher () {
//  yield takeLatest('USER_REQUEST', worker)
  yield takeLatest([USER_REQUEST, USER_NEW], worker)
}

export default watcher