import { all, call, fork, put, takeEvery, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_LIST_REQUEST,
	LOAD_LIST_SUCCESS,
	LOAD_LIST_FAILURE,
	ADD_LIST_REQUEST,
	ADD_LIST_SUCCESS,
	ADD_LIST_FAILURE,
	OPEN_TOAST_POP_REQUEST,
	OPEN_TOAST_POP_SUCCESS,
} from './actions';
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
	console.log('postData : ', postData);
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
			error: e,
		});
	}
}

function* watchAddList() {
	yield takeEvery(ADD_LIST_REQUEST, addList);
}

// Toast Popup
function* showToastPopup(action: any) {
	try {
		yield delay(5000);
		yield put({
			type: OPEN_TOAST_POP_SUCCESS,
			data: action.data,
		});
	} catch (e) {
		console.error(e);
	}
}

function* watchToastPopup() {
	yield takeEvery(OPEN_TOAST_POP_REQUEST, showToastPopup);
}

export function* listSaga() {
	yield all([fork(watchLoadList), fork(watchAddList), fork(watchToastPopup)]);
}
