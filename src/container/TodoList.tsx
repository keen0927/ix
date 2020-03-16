import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const TodoListBlock = styled.ul`
	margin-top: 24px;
`;

const TodoItem = styled.li`
	display: flex;
	border-radius: 10px;
	background-color: #fff;
	padding: 16px;
	
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
		word-wrap:break-word;
		font-size: 14px;
		line-height: 1.5;
		color: inherit;
	}
	button {
		width: 30px;
		height: 30px;
	}
`;

function TodoList() {
	return (
		<TodoListBlock>
			<TodoItem>
				<input type="checkbox" />
				<Link to="/">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Link>
				<button type="button">메뉴</button>
			</TodoItem>
		</TodoListBlock>
	);
}

export default TodoList;
