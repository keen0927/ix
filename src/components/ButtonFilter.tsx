import React, { FC, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { ToggleProps } from '../modules/search';

const ButtonFilterBlock = styled.button<{ active: boolean }>`
	height: 34px;
	margin-right: 7px;
	padding: 0 20px;
	border: 1px solid rgba(0, 0, 0, 0.42);
	border-radius: 4px;
	font-size: 12px;
	line-height: 24px;
	color: ${props => (props.active ? '#fff' : 'rgba(0, 0, 0, 0.42)')};
	background-color: ${props =>
		props.active ? 'rgba(146, 82, 241, 0.8)' : '#fff'};
	transition: 0.3s;

	&:hover {
		border-color: rgb(146, 82, 241);
		color: ${props => (props.active ? '#fff' : 'rgba(146, 82, 241, 0.8)')};
	}
`;

const ButtonFilter: FC<ToggleProps> = ({ filterList, onSort }: ToggleProps) => {
	const [active, setActive] = useState(false);

	const handleSort = useCallback(() => {
		setActive(!active);
		onSort(!active);
	}, [active]);

	return (
		<ButtonFilterBlock onClick={handleSort} active={active}>
			{filterList.text}
		</ButtonFilterBlock>
	);
};

export default ButtonFilter;
