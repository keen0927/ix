import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadListRequest, toggleListRequest, removeListRequest } from '../modules/todos';
import { RootState } from '../modules';
import TodoItem from '../components/TodoItem';
import SkeletonTodoItem from '../components/skeleton/SkeletonTodoItem';

const TodoListBlock = styled.ul`
	margin-top: 24px;
`;

function TodoList() {

	const dispatch = useDispatch();
	const { viewLists, isTogglingList } = useSelector((state: RootState) => state.todos);

	useEffect(() => {
		dispatch(loadListRequest());
	}, []);

	const onToggle = useCallback((id: number) => {
		
		if (isTogglingList) return;
		
		const targetTodo = viewLists.filter(v => v.id === id);
		const changeTodo = {
			...targetTodo[0],
			done: !targetTodo[0].done
		};
		dispatch(toggleListRequest(id, changeTodo));
	},[viewLists, isTogglingList]);	

	const onRemove = useCallback((id: number) => {
		dispatch(removeListRequest(id));
	},[viewLists]);
	
	if (viewLists.length === 0) return <SkeletonTodoItem />;

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
