import { takeEvery, takeLatest } from 'redux-saga'
import { take,call, put,select } from 'redux-saga/effects'
import Actions from "../actions/ActionTypes";

import { Api } from '../lib/Api'

export function* handleServiceGetGithubRepos(action) {
  try {

    yield put({type: Actions.FETCHING_REPOS});

    var payload = action.payload;

    var fetched_repos = yield call(Api.getRepos, payload.data);

    yield put({type: Actions.FETCH_REPOS_SUCCESS, payload: {repos: fetched_repos}});
    if (payload.resolve) {
      payload.resolve();
    }

    yield  put({type: Actions.DONE_FETCHING_REPOS});

  } catch (error) {
    yield put({type: Actions.FETCH_REPOS_FAILED, error});
  }

}
export default function* service_get_github_repos(getState) {
  yield* takeEvery([Actions.FETCH_REPOS], handleServiceGetGithubRepos);
}
