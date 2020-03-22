import produce from 'immer';
import { Todo } from './types';
import {
	LoadListAction,
	LOAD_LIST_REQUEST,
	LOAD_LIST_SUCCESS,
	LOAD_LIST_FAILURE,
	ADD_LIST_REQUEST,
	ADD_LIST_SUCCESS,
	ADD_LIST_FAILURE,
	TOGGLE_LIST_REQUEST,
	TOGGLE_LIST_SUCCESS,
	TOGGLE_LIST_FAILURE,
	REMOVE_LIST_REQUEST,
	REMOVE_LIST_SUCCESS,
	REMOVE_LIST_FAILURE
} from './actions';

interface InitialStateProps {
	lists: Todo[];
	page: number;
	isAddingList: boolean;
	isTogglingList: boolean;
	isRemovingList: boolean;
}

const initialState: InitialStateProps = {
	lists: [],
	page: 1,
	isAddingList: false,
	isTogglingList: false,
	isRemovingList: false
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
			case ADD_LIST_REQUEST: {
				break;
			}
			case ADD_LIST_SUCCESS: {
				break;
			}
			case ADD_LIST_FAILURE: {
				break;
			}	
			case TOGGLE_LIST_REQUEST: {
				break;
			}
			case TOGGLE_LIST_SUCCESS: {
				break;
			}
			case TOGGLE_LIST_FAILURE: {
				break;
			}	
			case REMOVE_LIST_REQUEST: {
				break;
			}
			case REMOVE_LIST_SUCCESS: {
				break;
			}
			case REMOVE_LIST_FAILURE: {
				break;
			}									
			default: {
				break;
			}


			
		}
	});
};

export default todos;
