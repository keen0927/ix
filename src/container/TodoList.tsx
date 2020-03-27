import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRequest, toggleListRequest, removeListRequest } from '../modules/todos';
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
		dispatch(toggleListRequest(id));
	};	

	const onRemove = (id: number) => {
		dispatch(removeListRequest(id));
	};
	
	if (viewLists.length === 0) return <div>Skeleton</div>;

	return (
		<TodoListBlock>
			{viewLists.map((viewList, i) => 
				<TodoItem 
					viewList={viewList}
					onToggle={onToggle}
					onRemove={onRemove}
					key={i}
				/>)}
		</TodoListBlock>
	);
}

export default TodoList;
