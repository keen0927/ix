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
	const lists = useSelector((state: RootState) => state.todos.lists);

	console.log(lists);

	useEffect(() => {
		dispatch(loadListRequest());
	}, []);

	const onOpenMenu = () => {
		console.log('onOpenMenu');
	};

	return (
		<TodoListBlock>
			{lists && lists.map((v, i) => <TodoItem text={v.text} onClick={onOpenMenu} key={i} />)}
		</TodoListBlock>
	);
}

export default TodoList;
