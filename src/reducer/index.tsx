import { combineReducers } from 'redux';
import ReducerList from './List/ReducerList';

const rootReducer = combineReducers({
	ReducerList,
});
export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>
