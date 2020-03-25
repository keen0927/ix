import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import styleVars from '../static/css-in-js/styleVars';
import { SvgCheck, SvgClose } from '../static/svg/svgAsset';
import { TodoItemProps } from '../modules/todos';

const TodoCheckBox = styled.label`
	display: block;
	position: relative;
	width: 24px;
	height: 24px;

	input {
		position: relative;
		z-index: 10;
		width: 24px;
		height: 24px;
		border-radius: 100%;
		background-color: rgba(62, 210, 229);
		opacity: 0.2;
		transition: opacity 0.3s;
		
		&:checked {
			opacity: 1;
			background-color: rgba(62, 210, 229);
			+ svg {
				opacity: 1;
			}
		}		
	}

	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 20;
		width: 16px;
		height: 16px;
		margin: -8px 0 0 -8px;
		opacity: 0;
		transition: opacity 0.3s;
		
		path {
			fill: #fff;
		}
	}	
`;

const TodoItemBlock = styled.li`
	display: flex;
	border-radius: 10px;
	background-color: #fff;
	margin-bottom: 14px;
	padding: 16px;
	box-shadow: ${styleVars.shadow};

	&:last-child {
		margin-bottom: 0;
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
`;

const TodoDeleteButton = styled.button`
	width: 30px;
	height: 30px;
	opacity: 0.3;
	transition: opacity 0.3s;

	svg {
		width: 20px;
		height: 20px;
		vertical-align: middle;

		polygon {
			fill: rgba(0,0,0,0.52);
		}
	}

	&:hover {
		opacity: 1;
	}
`;

const TodoItem: FC<TodoItemProps> = ({ viewList, onToggle, onRemove }: TodoItemProps) => {

	const handleToggle = () => {
		onToggle(viewList.id);
	};

	const handleRemove = () => {
		onRemove(viewList.id);
	};

	return (
		<TodoItemBlock>
			<TodoCheckBox>
				<input 
					type="checkbox"
					onChange={handleToggle}
				/>
				<SvgCheck />
			</TodoCheckBox>
			<Link to="/">{viewList.text}</Link>
			<TodoDeleteButton 
				type="button"
				onClick={handleRemove}
			>
				<SvgClose />
			</TodoDeleteButton>
		</TodoItemBlock>
	);
};

export default TodoItem;
