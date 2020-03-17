import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
	LIST_REQUEST,
	LIST_SUCCESS,
	LIST_FAILURE,
} from '../../reducer/List/ReducerList';

function loadListAPI() {
	return axios.get('http://localhost:3000/posts?_page=1&_limit=10');
}

function* loadList() {
	try {
		const response = yield call(loadListAPI);
		yield put({
			type: LIST_SUCCESS,
			data: response.data,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: LIST_FAILURE,
		});
	}
}

function* watchLoadList() {
	yield takeEvery(LIST_REQUEST, loadList);
}

export default function* popularKeywordSaga() {
	yield all([fork(watchLoadList)]);
}
