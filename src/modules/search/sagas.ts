/**
 * Search Saga
 */

import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
	SEARCH_LIST_REQUEST,
	SEARCH_LIST_SUCCESS,
	SEARCH_LIST_FAILURE,
	TOGGLE_SEARCH_LIST_REQUEST,
	TOGGLE_SEARCH_LIST_SUCCESS,
	TOGGLE_SEARCH_LIST_FAILURE,	
	REMOVE_SEARCH_LIST_REQUEST,
	REMOVE_SEARCH_LIST_SUCCESS,
	REMOVE_SEARCH_LIST_FAILURE,		
	searchListRequest,
	toggleSearchListRequest,
	removeSearchListRequest
} from './actions';
import { TodoProps } from '../todos';

// Load Search List
function searchListAPI(data: string) {
	return axios.get(`http://localhost:3000/posts?q=${data}`);
}

function* searchList(action: ReturnType<typeof searchListRequest>) {
	try {
		const result = yield call(searchListAPI, action.data);
		yield put({
			type: SEARCH_LIST_SUCCESS,
			data: result.data,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: SEARCH_LIST_FAILURE,
		});
	}
}

function* watchSearchList() {
	yield takeEvery(SEARCH_LIST_REQUEST, searchList);
}

// Remove List
function removeSearchListAPI(id: number) {
	return axios.delete(`http://localhost:3000/posts/${id}`);
}

function* removeList(action: ReturnType<typeof removeSearchListRequest>) {
	try {
		yield call(removeSearchListAPI, action.id);
		yield put({
			type: REMOVE_SEARCH_LIST_SUCCESS,
			id: action.id,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: REMOVE_SEARCH_LIST_FAILURE,
			error: e,
		});
	}
}

function* watchRemoveSearchList() {
	yield takeEvery(REMOVE_SEARCH_LIST_REQUEST, removeList);
}

// Toggle Search List
function toggleSearchListAPI(id: number, data: TodoProps) {
	return axios.put(`http://localhost:3000/posts/${id}`, data);
}

function* toggleSearchList(action: ReturnType<typeof toggleSearchListRequest>) {
	try {
		yield call(toggleSearchListAPI, action.id, action.data);
		yield put({
			type: TOGGLE_SEARCH_LIST_SUCCESS,
			id: action.id,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: TOGGLE_SEARCH_LIST_FAILURE,
			error: e,
		});
	}
}

function* watchToggleSearchList() {
	yield takeEvery(TOGGLE_SEARCH_LIST_REQUEST, toggleSearchList);
}

export function* searchSaga() {
	yield all([
		fork(watchSearchList),
		fork(watchToggleSearchList),
		fork(watchRemoveSearchList)
	]);
}
