import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { 
	LOAD_LIST_REQUEST,
	LOAD_LIST_SUCCESS,
	LOAD_LIST_FAILURE,
	ADD_LIST_REQUEST,
	ADD_LIST_SUCCESS,
	ADD_LIST_FAILURE} from './actions';
import { Todo } from './types';

function loadListAPI() {
	return axios.get('http://localhost:3000/posts?_page=1&_limit=10');
}

function* loadList() {
	try {
		const result = yield call(loadListAPI);
		yield put({
			type: LOAD_LIST_SUCCESS,
			data: result.data,
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

function addListAPI(postData: Todo[]) {
	return axios.post('http://localhost:3000/posts', postData);
}

function* addList(action: any) {
	try {
		const result = yield call(addListAPI, action.data);
		yield put({
			type: ADD_LIST_SUCCESS,
			data: result.data,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: ADD_LIST_FAILURE,
			error: e
		});
	}
}

function* watchAddList() {
	yield takeEvery(ADD_LIST_REQUEST, addList);
}

export function* listSaga() {
	yield all([
		fork(watchLoadList),
		fork(watchAddList),
	]);
}
