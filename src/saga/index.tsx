import { all, fork } from 'redux-saga/effects';
import SagaSample from './List/SagaSample';

export default function* rootSaga() {
	yield all([fork(SagaSample)]);
}
