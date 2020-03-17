// import React, { Suspense, lazy } from 'react';
// const HomePopularKeyword = lazy(() => import('../containers/Home/HomePopularKeyword'));
import * as React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { LIST_REQUEST } from '../reducer/List/ReducerList';
// import styleVars from '../static/css-in-js/styleVars';

const DivBlock = styled.div`
	border: 1px solid #000;
`;

function Home() {
	// http://localhost:3000/posts/1
	// http://localhost:3000/posts?_page=1&_limit=10
	// http://localhost:3000/posts?q=Cras
	// http://localhost:3000/posts?q=Cras&_sort=id&_order=desc

	const dispatch = useDispatch();

	React.useEffect(() => {
		console.log('effect');
		dispatch({ type: LIST_REQUEST });
	}, []);

	return (
		<>
			<DivBlock>123</DivBlock>
			<div>123</div>
			<p>123</p>
		</>
	);
}

export default Home;
