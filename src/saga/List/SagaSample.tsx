import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
	SAMPLE_REQUEST,
	SAMPLE_SUCCESS,
	SAMPLE_FAILURE,
} from '../../reducer/List/ReducerSample';

function loadSampleAPI() {
	return axios.get('');
}

function* loadSample() {
	try {
		const sample = yield call(loadSampleAPI);
		yield put({
			type: SAMPLE_SUCCESS,
			data: sample.data,
		});
	} catch (e) {
		console.error(e);
		yield put({
			type: SAMPLE_FAILURE,
		});
	}
}

function* watchSample() {
	yield takeEvery(SAMPLE_REQUEST, loadSample);
}

export default function* popularKeywordSaga() {
	yield all([fork(watchSample)]);
}
