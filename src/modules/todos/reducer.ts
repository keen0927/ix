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
	addListErrorReason: string;
}

const initialState: InitialStateProps = {
	lists: [],
	page: 1,
	isAddingList: false,
	isTogglingList: false,
	isRemovingList: false,
	addListErrorReason: '',
};

const todos = (state = initialState, action: LoadListAction) => {
	return produce(state, draft => {
		switch (action.type) {
			case LOAD_LIST_REQUEST: {
				break;
			}
			case LOAD_LIST_SUCCESS: {
				draft.lists = action.data;
				break;
			}
			case LOAD_LIST_FAILURE: {
				break;
			}
			case ADD_LIST_REQUEST: {
				draft.isAddingList = true;
				break;
			}
			case ADD_LIST_SUCCESS: {
				draft.isAddingList = false;
				// draft.lists.unshift(action.data);
				console.log('ADD_LIST_SUCCESS');
				break;
			}
			case ADD_LIST_FAILURE: {
				draft.isAddingList = false;
				// draft.addPostErrorReason = action.error;
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
