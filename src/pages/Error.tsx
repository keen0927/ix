import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function Error() {
	const ErrorBlock = styled.div`
		a {
			display: inline-block;
			height: 40px;
			padding: 0 20px;
			border-radius: 8px;
			border: 1px solid rgba(0, 0, 0, 0.4);
			color: rgb(146, 82, 241);
			font-size: 14px;
			line-height: 40px;
		}
	`;

	return (
		<ErrorBlock>
			잘못된 경로 입니다.
			<Link to="/">홈으로 가기</Link>
		</ErrorBlock>
	);
}

export default Error;
