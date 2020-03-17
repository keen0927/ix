import { all, fork } from 'redux-saga/effects';
import SagaList from './List/SagaList';

export default function* rootSaga() {
	yield all([fork(SagaList)]);
}
