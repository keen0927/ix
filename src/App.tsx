import * as React from 'react';
import styled from '@emotion/styled';

const TestBlock = styled.div`
	width: 100px;
	height: 100px;
	border: 1px solid #000;
`;

function App() {
	const title = 'react + ts';
	return <TestBlock>{title} 테스트</TestBlock>;
}

export default App;
