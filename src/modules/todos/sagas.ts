import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_LIST_REQUEST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILURE } from './actions';

function loadListAPI() {
	return axios.get('http://localhost:3000/posts?_page=1&_limit=10');
}

function* loadList() {
	try {
		const response = yield call(loadListAPI);
		yield put({
			type: LOAD_LIST_SUCCESS,
			payload: response.data,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: LOAD_LIST_FAILURE,
		});
	}
}

function* watchLoadList() {
	yield takeEvery(LOAD_LIST_REQUEST, loadList);
}

export function* listSaga() {
	yield all([fork(watchLoadList)]);
}
