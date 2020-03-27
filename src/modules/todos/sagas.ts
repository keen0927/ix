import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { 
	LOAD_LIST_REQUEST,
	LOAD_LIST_SUCCESS,
	LOAD_LIST_FAILURE,
	ADD_LIST_REQUEST,
	ADD_LIST_SUCCESS,
	ADD_LIST_FAILURE,
	REMOVE_LIST_REQUEST,
	REMOVE_LIST_SUCCESS,
	REMOVE_LIST_FAILURE} from './actions';
import { TodoProps } from './types';

// Load List
function loadListAPI() {
	return axios.get('http://localhost:3000/posts');
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

// Add List
function addListAPI(postData: TodoProps) {
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

// Remove List
function removeListAPI(id: number) {
	return axios.delete(`http://localhost:3000/posts/${id}`);
}

function* removeList(action: any) {
	try {
		yield call(removeListAPI, action.id);
		yield put({
			type: REMOVE_LIST_SUCCESS,
			id: action.id
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: REMOVE_LIST_FAILURE,
			error: e
		});
	}
}

function* watchRemoveList() {
	yield takeEvery(REMOVE_LIST_REQUEST, removeList);
}

export function* listSaga() {
	yield all([
		fork(watchLoadList),
		fork(watchAddList),
		fork(watchRemoveList),
	]);
}
