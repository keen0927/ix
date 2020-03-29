/**
 * Search Actinos
 */

import { TodoProps } from '../todos/types';

// Actions
export const SEARCH_LIST_REQUEST = 'SEARCH_LIST_REQUEST' as const;
export const SEARCH_LIST_SUCCESS = 'SEARCH_LIST_SUCCESS' as const;
export const SEARCH_LIST_FAILURE = 'SEARCH_LIST_FAILURE' as const;

export const TOGGLE_SEARCH_LIST_REQUEST = 'TOGGLE_SEARCH_LIST_REQUEST' as const;
export const TOGGLE_SEARCH_LIST_SUCCESS = 'TOGGLE_SEARCH_LIST_SUCCESS' as const;
export const TOGGLE_SEARCH_LIST_FAILURE = 'TOGGLE_SEARCH_LIST_FAILURE' as const;

export const REMOVE_SEARCH_LIST_REQUEST = 'REMOVE_SEARCH_LIST_REQUEST' as const;
export const REMOVE_SEARCH_LIST_SUCCESS = 'REMOVE_SEARCH_LIST_SUCCESS' as const;
export const REMOVE_SEARCH_LIST_FAILURE = 'REMOVE_SEARCH_LIST_FAILURE' as const;

export const FILTER_SEARCH_LIST = 'FILTER_SEARCH_LIST' as const;

// Action Create Function
// Search List
export const searchListRequest = (data: string) => ({
	type: SEARCH_LIST_REQUEST,
	data,
});
export const searchListSuccess = (data: TodoProps[]) => ({
	type: SEARCH_LIST_SUCCESS,
	data,
});
export const searchListFailure = () => ({ type: SEARCH_LIST_FAILURE });

// Toggle List
export const toggleSearchListRequest = (id: number, data: TodoProps) => ({
	type: TOGGLE_SEARCH_LIST_REQUEST,
	id,
	data,
});
export const toggleSearchListSuccess = (id: number) => ({
	type: TOGGLE_SEARCH_LIST_SUCCESS,
	id,
});
export const toggleSearchListFailure = (error: string) => ({
	type: TOGGLE_SEARCH_LIST_FAILURE,
	error,
});

// Remove Search List
export const removeSearchListRequest = (id: number) => ({
	type: REMOVE_SEARCH_LIST_REQUEST,
	id,
});
export const removeSearchListSuccess = (id: number) => ({
	type: REMOVE_SEARCH_LIST_SUCCESS,
	id,
});
export const removeSearchListFailure = (error: string) => ({
	type: REMOVE_SEARCH_LIST_FAILURE,
	error,
});

// Filter Search List
export const filterSearchList = (active: boolean) => ({
	type: FILTER_SEARCH_LIST,
	active
});

// Return Type Action
export type SearchListAction =
	| ReturnType<typeof searchListRequest>
	| ReturnType<typeof searchListSuccess>
	| ReturnType<typeof searchListFailure>
	| ReturnType<typeof toggleSearchListRequest>
	| ReturnType<typeof toggleSearchListSuccess>
	| ReturnType<typeof toggleSearchListFailure>
	| ReturnType<typeof removeSearchListRequest>
	| ReturnType<typeof removeSearchListSuccess>
	| ReturnType<typeof removeSearchListFailure>
	| ReturnType<typeof filterSearchList>;
