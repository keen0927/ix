/**
 * Container > Search List
 */

import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchListRequest, removeSearchListRequest } from '../modules/search';
import TodoItem from '../components/TodoItem';
import { RootState } from '../modules';

const SearchListBlock = styled.ul`
	margin-top: 24px;
`;

const EmptyBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60vw;
	text-align: center;
	font-size: 18px;
	color: rgba(0,0,0,0.52);
`;

const SearchList = () => {

	const dispatch = useDispatch();
	const { search, todos } = useSelector((state: RootState) => state);

	const { searchList } = search;
	const { isTogglingList } = todos;

	const onToggle = useCallback((id: number) => {
		
		if (isTogglingList) return;
		
		const targetTodo = searchList.filter(v => v.id === id);
		
		const changeTodo = {
			...targetTodo[0],
			done: !targetTodo[0].done
		};
		
		dispatch(toggleSearchListRequest(id, changeTodo));
		
	},[searchList, isTogglingList]);	

	const onRemove = useCallback((id: number) => {
		dispatch(removeSearchListRequest(id));
	},[searchList]);

	if (searchList.length === 0) return <EmptyBlock><span>검색결과가 없습니다.</span></EmptyBlock>;

	return (
		<SearchListBlock>
			{searchList.map((searchList, i) => 
				<TodoItem 
					viewList={searchList}
					onToggle={onToggle}
					onRemove={onRemove}
					key={i}
      />)}
		</SearchListBlock>
	);
};

export default SearchList;
