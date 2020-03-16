import { combineReducers } from 'redux';
import ReducerSample from './List/ReducerSample';

const rootReducer = combineReducers({
	ReducerSample,
});
export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>
