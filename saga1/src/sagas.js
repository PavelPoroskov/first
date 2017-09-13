import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { apiFetchPosts } from './api'

import { POSTS_FETCH_REQUESTED, fetchPostsSucceeded, fetchPostsFailed } from './actions'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPosts(action) {
   try {
//      const posts = yield call( apiFetchPosts() );
      const posts = yield call( apiFetchPosts );

//      yield put({type: "POSTS_FETCH_SUCCEEDED", posts: posts });
//      yield put( actions.fetchPostsSucceeded(posts) );
      yield put( fetchPostsSucceeded(posts) );
   } catch (e) {
//      yield put({type: "POSTS_FETCH_FAILED", message: e.message});
//      yield put( actions.fetchPostsFailed(e.message) );
      yield put( fetchPostsFailed(e.message) );
   }
}


//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.

// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest( POSTS_FETCH_REQUESTED, fetchPosts );
}

export default mySaga;