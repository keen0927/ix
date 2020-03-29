/**
 * Detail Saga
 */

import { all, call, fork, put, takeEvery, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_DETAIL_LIST_REQUEST,
	LOAD_DETAIL_LIST_SUCCESS,
	LOAD_DETAIL_LIST_FAILURE,
	SAVE_DETAIL_LIST_REQUEST,
	SAVE_DETAIL_LIST_SUCCESS,
	SAVE_DETAIL_LIST_FAILURE,
	loadDetailListRequest,
	saveDetailListRequest,
} from './actions';
import { TodoProps } from '../todos';

// Load List
function loadDetailListAPI(id: number) {
	return axios.get(`http://localhost:3000/posts/${id}`);
}

function* loadDetailList(action: ReturnType<typeof loadDetailListRequest>) {
	try {
		const result = yield call(loadDetailListAPI, action.id);
		yield put({
			type: LOAD_DETAIL_LIST_SUCCESS,
			data: result.data,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: LOAD_DETAIL_LIST_FAILURE,
		});
	}
}

function* watchLoadDetailList() {
	yield takeEvery(LOAD_DETAIL_LIST_REQUEST, loadDetailList);
}

// Save List
function saveDetailListAPI(id: number, data: TodoProps) {
	return axios.put(`http://localhost:3000/posts/${id}`, data);
}

function* saveDetailList(action: ReturnType<typeof saveDetailListRequest>) {
	try {
		yield call(saveDetailListAPI, action.id, action.data);
		yield put({
			type: SAVE_DETAIL_LIST_SUCCESS,
			data: action.data,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: SAVE_DETAIL_LIST_FAILURE,
		});
	}
}

function* watchSaveDetailList() {
	yield takeEvery(SAVE_DETAIL_LIST_REQUEST, saveDetailList);
}

export function* detailSaga() {
	yield all([fork(watchLoadDetailList), fork(watchSaveDetailList)]);
}
