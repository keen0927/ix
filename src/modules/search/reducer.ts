/**
 * Todo Reducer
 */

import produce from 'immer';
import { TodoProps } from '../todos/types';
import {
	SearchListAction,
	SEARCH_LIST_REQUEST,
	SEARCH_LIST_SUCCESS,
	SEARCH_LIST_FAILURE,
	TOGGLE_SEARCH_LIST_REQUEST,
	TOGGLE_SEARCH_LIST_SUCCESS,
	TOGGLE_SEARCH_LIST_FAILURE,
	REMOVE_SEARCH_LIST_REQUEST,
	REMOVE_SEARCH_LIST_SUCCESS,
	REMOVE_SEARCH_LIST_FAILURE,
	FILTER_SEARCH_LIST,
} from './actions';

interface InitialStateProps {
	originSearchList: TodoProps[];
	searchList: TodoProps[];
	isSearching: boolean;
	isToggling: boolean;
	isRemoving: boolean;
}

const initialState: InitialStateProps = {
	originSearchList: [],
	searchList: [],
	isSearching: false,
	isToggling: false,
	isRemoving: false,
};

const search = (state = initialState, action: SearchListAction) => {
	return produce(state, draft => {
		switch (action.type) {
			case SEARCH_LIST_REQUEST: {
				draft.isSearching = true;
				break;
			}
			case SEARCH_LIST_SUCCESS: {
				draft.isSearching = false;
				draft.searchList = action.data.reverse();
				draft.originSearchList = draft.searchList;
				break;
			}
			case SEARCH_LIST_FAILURE: {
				draft.isSearching = false;
				break;
			}
			case TOGGLE_SEARCH_LIST_REQUEST: {
				draft.isToggling = true;
				break;
			}
			case TOGGLE_SEARCH_LIST_SUCCESS: {
				draft.isToggling = false;
				const index = draft.searchList.findIndex(v => v.id === action.id);
				draft.searchList[index].done = !draft.searchList[index].done;
				break;
			}
			case TOGGLE_SEARCH_LIST_FAILURE: {
				draft.isToggling = false;
				break;
			}
			case REMOVE_SEARCH_LIST_REQUEST: {
				draft.isRemoving = true;
				break;
			}
			case REMOVE_SEARCH_LIST_SUCCESS: {
				draft.isRemoving = false;
				const index = draft.searchList.findIndex(v => v.id === action.id);
				draft.searchList.splice(index, 1);
				break;
			}
			case REMOVE_SEARCH_LIST_FAILURE: {
				draft.isRemoving = false;
				break;
			}
			case FILTER_SEARCH_LIST: {
				if (action.active) {
					const sortId = [...state.searchList].sort((a, b) => {
						return a.id - b.id;
					});
					draft.searchList = sortId;
				} else {
					draft.searchList = draft.originSearchList;
				}
				break;
			}
			default: {
				break;
			}
		}
	});
};

export default search;
