import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todos, { listSaga } from './todos';

const rootReducer = combineReducers({
	todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
	yield all([listSaga()]);
}
