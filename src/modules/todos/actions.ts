import { TodoProps } from './types';

// Actions
export const LOAD_LIST_REQUEST = 'LOAD_LIST_REQUEST' as const;
export const LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS' as const;
export const LOAD_LIST_FAILURE = 'LOAD_LIST_FAILURE' as const;

export const ADD_LIST_REQUEST = 'ADD_LIST_REQUEST' as const;
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS' as const;
export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE' as const;

export const TOGGLE_LIST_REQUEST = 'TOGGLE_LIST_REQUEST' as const;
export const TOGGLE_LIST_SUCCESS = 'TOGGLE_LIST_SUCCESS' as const;
export const TOGGLE_LIST_FAILURE = 'TOGGLE_LIST_FAILURE' as const;

export const REMOVE_LIST_REQUEST = 'REMOVE_LIST_REQUEST' as const;
export const REMOVE_LIST_SUCCESS = 'REMOVE_LIST_SUCCESS' as const;
export const REMOVE_LIST_FAILURE = 'REMOVE_LIST_FAILURE' as const;

// Action Create Function
// Load List
export const loadListRequest = () => ({ type: LOAD_LIST_REQUEST });
export const loadListSuccess = (data: TodoProps[]) => ({
	type: LOAD_LIST_SUCCESS,
	data: data
});
export const loadListFailure = () => ({ type: LOAD_LIST_FAILURE });

// Add List
export const addListRequest = (data: TodoProps) => ({ 
	type: ADD_LIST_REQUEST,
	data: data
});
export const addListSuccess = (data: TodoProps) => ({
	type: ADD_LIST_SUCCESS,
	data: data
});
export const addListFailure = (error: string) => ({
	type: ADD_LIST_FAILURE,
	error: error
});

// Toggle List
export const toggleListRequest = (id: number, data: TodoProps) => ({ 
	type: TOGGLE_LIST_REQUEST,
	id: id,
	data: data
});
export const toggleListSuccess = (data: TodoProps) => ({ 
	type: TOGGLE_LIST_SUCCESS,
	data: data
});
export const toggleListFailure = (error: string) => ({ 
	type: TOGGLE_LIST_FAILURE,
	error: error
});

// Remove List
export const removeListRequest = (id: number) => ({ 
	type: REMOVE_LIST_REQUEST,
	id: id
});
export const removeListSuccess = (id: number) => ({
	type: REMOVE_LIST_SUCCESS,
	id: id
});
export const removeListFailure = (error: string) => ({
	type: REMOVE_LIST_FAILURE,
	error: error
});

// Return Type Action
export type LoadListAction =
	| ReturnType<typeof loadListRequest>
	| ReturnType<typeof loadListSuccess>
	| ReturnType<typeof loadListFailure>
	| ReturnType<typeof addListRequest>
	| ReturnType<typeof addListSuccess>
	| ReturnType<typeof addListFailure>	
	| ReturnType<typeof toggleListRequest>
	| ReturnType<typeof toggleListSuccess>
	| ReturnType<typeof toggleListFailure>
	| ReturnType<typeof removeListRequest>		
	| ReturnType<typeof removeListSuccess>		
	| ReturnType<typeof removeListFailure>;		
