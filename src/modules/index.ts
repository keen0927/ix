import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todos, { todosSaga } from './todos';
import detail, { detailSaga } from './detail';

const rootReducer = combineReducers({
	todos,
	detail,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
	yield all([todosSaga(), detailSaga()]);
}
