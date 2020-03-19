import produce from 'immer';
import { Todo } from './types';
import {
	LoadListAction,
	LOAD_LIST_REQUEST,
	LOAD_LIST_SUCCESS,
	LOAD_LIST_FAILURE,
} from './actions';

interface InitialStateProps {
	lists: Todo[];
	page: number;
}

const initialState: InitialStateProps = {
	lists: [],
	page: 1,
};

const todos = (state = initialState, action: LoadListAction) => {
	return produce(state, draft => {
		switch (action.type) {
			case LOAD_LIST_REQUEST: {
				break;
			}
			case LOAD_LIST_SUCCESS: {
				const response = action.payload;
				draft.lists = response;
				break;
			}
			case LOAD_LIST_FAILURE: {
				break;
			}
			default: {
				break;
			}
		}
	});
};

export default todos;
