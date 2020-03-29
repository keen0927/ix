/**
 * Detail Reducer
 */

import produce from 'immer';
import { TodoProps } from './types';
import {
	LOAD_DETAIL_LIST_REQUEST,
	LOAD_DETAIL_LIST_SUCCESS,
	LOAD_DETAIL_LIST_FAILURE,
	SAVE_DETAIL_LIST_REQUEST,
	SAVE_DETAIL_LIST_SUCCESS,
	SAVE_DETAIL_LIST_FAILURE,
	LoadDetailListAction,
} from './actions';

interface InitialStateProps {
	detailList: TodoProps | null;
	detailListFailReason: string;
	isSaving: boolean;
}

const initialState: InitialStateProps = {
	detailList: null,
	detailListFailReason: '',
	isSaving: false,
};

const todos = (state = initialState, action: LoadDetailListAction) => {
	return produce(state, draft => {
		switch (action.type) {
			case LOAD_DETAIL_LIST_REQUEST: {
				break;
			}
			case LOAD_DETAIL_LIST_SUCCESS: {
				draft.detailList = action.data;
				break;
			}
			case LOAD_DETAIL_LIST_FAILURE: {
				draft.detailListFailReason = action.error;
				break;
			}
			case SAVE_DETAIL_LIST_REQUEST: {
				draft.isSaving = true;
				draft.detailList = action.data;
				break;
			}
			case SAVE_DETAIL_LIST_SUCCESS: {
				draft.isSaving = false;
				break;
			}
			case SAVE_DETAIL_LIST_FAILURE: {
				draft.isSaving = false;
				break;
			}
			default: {
				break;
			}
		}
	});
};

export default todos;
