// import React, { Suspense, lazy } from 'react';
// const HomePopularKeyword = lazy(() => import('../containers/Home/HomePopularKeyword'));
import React from 'react';
import styled from '@emotion/styled';
import TodoHeader from '../container/TodoHeader';
import TodoList from '../container/TodoList';

const HomeBlock = styled.div`
	margin: 0 24px;
`;

function Home() {
	return (
		<HomeBlock>
			<TodoHeader />
			<TodoList />
		</HomeBlock>
	);
}

export default Home;
