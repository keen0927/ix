import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import styleVars from '../static/css-in-js/styleVars';
import { Todo } from '../modules/todos';

const TodoItemBlock = styled.li`
	display: flex;
	border-radius: 10px;
	background-color: #fff;
	margin-bottom: 12px;
	padding: 16px;
	box-shadow: ${styleVars.shadow};

	input {
		width: 24px;
		height: 24px;
		border: 1px solid #000;
		border-radius: 100%;
	}

	a {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		margin: 0 16px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-wrap: break-word;
		font-size: 14px;
		line-height: 1.5;
		color: inherit;

		&:hover {
			text-decoration: underline;
		}
	}

	button {
		width: 30px;
		height: 30px;
	}
`;

const TodoItem: FC<Todo> = ({ text, onClick }: Todo) => {
	return (
		<TodoItemBlock>
			<input type="checkbox" />
			<Link to="/">{text}</Link>
			<button type="button" onClick={onClick}>
				메뉴
			</button>
		</TodoItemBlock>
	);
};

export default TodoItem;
