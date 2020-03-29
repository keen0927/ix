/**
 * Todo Reducer
 */

import produce from 'immer';
import { TodoProps } from './types';
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
	REMOVE_LIST_FAILURE,
} from './actions';

interface InitialStateProps {
	lists: TodoProps[];
	viewLists: TodoProps[];
	page: number;
	currentListId: number;
	isAddingList: boolean;
	isRemovingList: boolean;
	isTogglingList: boolean;
	addListErrorReason: string;
}

const initialState: InitialStateProps = {
	lists: [],
	viewLists: [],
	page: 1,
	currentListId: 0,
	isAddingList: false,
	isRemovingList: false,
	isTogglingList: false,
	addListErrorReason: '',
};

const todos = (state = initialState, action: LoadListAction) => {
	return produce(state, draft => {
		switch (action.type) {
			case LOAD_LIST_REQUEST: {
				break;
			}
			case LOAD_LIST_SUCCESS: {
				draft.lists = action.data.reverse();
				draft.currentListId = draft.lists[0].id!;
				draft.viewLists = draft.lists.slice(0, 10);
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
				draft.lists.unshift(action.data);
				draft.viewLists.unshift(action.data);
				draft.viewLists.pop();
				draft.currentListId++;
				break;
			}
			case ADD_LIST_FAILURE: {
				draft.isAddingList = false;
				draft.addListErrorReason = action.error;
				break;
			}
			case TOGGLE_LIST_REQUEST: {
				draft.isTogglingList = true;
				const index = draft.viewLists.findIndex(v => v.id === action.id);
				draft.viewLists[index].done = !draft.viewLists[index].done;
				break;
			}
			case TOGGLE_LIST_SUCCESS: {
				draft.isTogglingList = false;
				break;
			}
			case TOGGLE_LIST_FAILURE: {
				draft.isTogglingList = false;
				break;
			}
			case REMOVE_LIST_REQUEST: {
				draft.isRemovingList = true;
				break;
			}
			case REMOVE_LIST_SUCCESS: {
				draft.isRemovingList = false;
				const index = draft.viewLists.findIndex(v => v.id === action.id);
				const viewListsLength = state.viewLists.length;
				viewListsLength >= 10
					? draft.viewLists.push(draft.lists[viewListsLength + 1])
					: null;
				draft.lists.splice(index, 1);
				draft.viewLists.splice(index, 1);
				break;
			}
			case REMOVE_LIST_FAILURE: {
				draft.isRemovingList = false;
				draft.addListErrorReason = action.error;
				break;
			}
			default: {
				break;
			}
		}
	});
};

export default todos;
