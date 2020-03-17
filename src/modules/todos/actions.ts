import { Todo } from './types';

export const LIST_REQUEST = 'LIST_REQUEST' as const;
export const LIST_SUCCESS = 'LIST_SUCCESS' as const;
export const LIST_FAILURE = 'LIST_FAILURE' as const;

export const listRequest = () => ({ type: LIST_REQUEST });
export const listSuccess = (data: Todo[]) => ({
	type: LIST_SUCCESS,
	payload: data,
});
export const listFailure = () => ({ type: LIST_FAILURE });

export type ListAction =
	| ReturnType<typeof listRequest>
	| ReturnType<typeof listSuccess>
	| ReturnType<typeof listFailure>;
