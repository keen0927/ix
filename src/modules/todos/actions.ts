import { Todo } from './types';

export const LOAD_LIST_REQUEST = 'LOAD_LIST_REQUEST' as const;
export const LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS' as const;
export const LOAD_LIST_FAILURE = 'LOAD_LIST_FAILURE' as const;

export const loadListRequest = () => ({ type: LOAD_LIST_REQUEST });
export const loadListSuccess = (data: Todo[]) => ({
	type: LOAD_LIST_SUCCESS,
	payload: data,
});
export const loadListFailure = () => ({ type: LOAD_LIST_FAILURE });

export type LoadListAction =
	| ReturnType<typeof loadListRequest>
	| ReturnType<typeof loadListSuccess>
	| ReturnType<typeof loadListFailure>;
