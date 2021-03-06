/**
 * Todo Home
 */
import React from 'react';
import styled from '@emotion/styled';
import TodoHeader from '../container/TodoHeader';
import TodoList from '../container/TodoList';
import TodoFooter from '../container/TodoFooter';;

const HomeBlock = styled.div`
	margin: 0 24px;
`;

function Home() {
	return (
		<HomeBlock>
			<TodoHeader />
			<TodoList />
			<TodoFooter />
		</HomeBlock>
	);
}

export default Home;
