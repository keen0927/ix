import { TodoProps } from './types';

// Actions
export const LOAD_DETAIL_LIST_REQUEST = 'LOAD_DETAIL_LIST_REQUEST' as const;
export const LOAD_DETAIL_LIST_SUCCESS = 'LOAD_DETAIL_LIST_SUCCESS' as const;
export const LOAD_DETAIL_LIST_FAILURE = 'LOAD_DETAIL_LIST_FAILURE' as const;

export const SAVE_DETAIL_LIST_REQUEST = 'SAVE_DETAIL_LIST_REQUEST' as const;
export const SAVE_DETAIL_LIST_SUCCESS = 'SAVE_DETAIL_LIST_SUCCESS' as const;
export const SAVE_DETAIL_LIST_FAILURE = 'SAVE_DETAIL_LIST_FAILURE' as const;

// Action Create Function
// Load Detail List
export const loadDetailListRequest = (id: number) => ({
	type: LOAD_DETAIL_LIST_REQUEST,
	id,
});
export const loadDetailListSuccess = (data: TodoProps) => ({
	type: LOAD_DETAIL_LIST_SUCCESS,
	data,
});
export const loadDetailListFailure = (error: string) => ({
	type: LOAD_DETAIL_LIST_FAILURE,
	error,
});

// Save Detail List
export const saveDetailListRequest = (id: number, data: TodoProps) => ({
	type: SAVE_DETAIL_LIST_REQUEST,
	id,
	data,
});
export const saveDetailListSuccess = (data: TodoProps) => ({
	type: SAVE_DETAIL_LIST_SUCCESS,
	data,
});
export const saveDetailListFailure = (error: string) => ({
	type: SAVE_DETAIL_LIST_FAILURE,
	error,
});

// Return Type Action
export type LoadDetailListAction =
	| ReturnType<typeof loadDetailListRequest>
	| ReturnType<typeof loadDetailListSuccess>
	| ReturnType<typeof loadDetailListFailure>
	| ReturnType<typeof saveDetailListRequest>
	| ReturnType<typeof saveDetailListSuccess>
	| ReturnType<typeof saveDetailListFailure>;
