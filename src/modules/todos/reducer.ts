import produce from 'immer';
import { Todo } from './types';
import {
	ListAction,
	LIST_REQUEST,
	LIST_SUCCESS,
	LIST_FAILURE,
} from './actions';

interface InitialStateProps {
	lists: Todo[];
	page: number;
}

const initialState: InitialStateProps = {
	lists: [],
	page: 1,
};

const todos = (state = initialState, action: ListAction) => {
	return produce(state, draft => {
		switch (action.type) {
			case LIST_REQUEST: {
				break;
			}
			case LIST_SUCCESS: {
				const response = action.payload;
				draft.lists = response;
				break;
			}
			case LIST_FAILURE: {
				break;
			}
			default: {
				break;
			}
		}
	});
};

export default todos;
