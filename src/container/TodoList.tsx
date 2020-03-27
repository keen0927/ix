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
	const { viewLists } = useSelector((state: RootState) => state.todos);

	useEffect(() => {
		dispatch(loadListRequest());
	}, []);

	const onToggle = (id: number) => {
		console.log('toggle', id);
	};

	const onRemove = (id: number) => {
		console.log('remove', id);
	};

	if (viewLists.length === 0) return null;

	return (
		<TodoListBlock>
			{viewLists.map((viewList, i) => (
				<TodoItem
					viewList={viewList}
					onToggle={onToggle}
					onRemove={onRemove}
					key={i}
				/>
			))}
		</TodoListBlock>
	);
}

export default TodoList;
