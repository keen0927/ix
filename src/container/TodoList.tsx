import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRequest } from '../modules/todos';
import { RootState } from '../modules';
import TodoItem from '../components/TodoItem';

const TodoListBlock = styled.ul`
	margin-top: 24px;
`;

function TodoList() {

	const dispatch = useDispatch();
	const viewLists = useSelector((state: RootState) => state.todos.viewLists);

	useEffect(() => {
		dispatch(loadListRequest());
	}, []);

	const onOpenMenu = () => {
		console.log('onOpenMenu');
	};
	
	if(viewLists.length === 0) return null;

	return (
		<TodoListBlock>
			{viewLists && viewLists.map((v, i) => <TodoItem text={v.text} onClick={onOpenMenu} key={i} />)}
		</TodoListBlock>
	);
}

export default TodoList;
