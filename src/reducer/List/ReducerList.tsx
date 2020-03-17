import produce from 'immer';
import { Todo } from '../../types/TypesTodo';

interface InitialStateProps {
	lists: Todo[];
	page: number;
}

const initialState: InitialStateProps = {
	lists: [],
	page: 1,
};

export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILURE = 'LIST_FAILURE';

const ReducerList = (state = initialState, action: any) => {
	return produce(state, draft => {
		switch (action.type) {
			case LIST_REQUEST: {
				break;
			}
			case LIST_SUCCESS: {
				const response = action.data;
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

export default ReducerList;
