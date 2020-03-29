/**
 * 상세 페이지
 */

import React, { FC, useEffect, useState, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
	loadDetailListRequest,
	saveDetailListRequest,
} from '../modules/detail';
import { SvgBack, SvgWrite, SvgClose, SvgCheck } from '../static/svg/svgAsset';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ButtonTypeCircle } from '../static/css-in-js/styleCommon';
import styleVars from '../static/css-in-js/styleVars';
import dayjs from 'dayjs';

const TopNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 14px 0 14px;
`;

const ButtonBack = styled.span`
	svg {
		margin-left: 5px;
		path {
			fill: rgba(0, 0, 0, 0.32);
		}
	}
`;

const ButtonEdit = styled(ButtonTypeCircle)`
	width: 40px;
	height: 40px;
	margin-right: 8px;
	border-radius: 100%;

	svg {
		width: 20px;
		height: 20px;
	}
`;

const DetailBlock = styled.div`
	margin-top: 10px;
	padding: 0 24px;

	div:nth-of-type(1) {
		padding-bottom: 14px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);

		p {
			font-size: 12px;
			line-height: 1.6;
			color: rgba(0, 0, 0, 0.42);
		}
	}

	div:nth-of-type(2) {
		padding-top: 14px;
		font-size: 14px;
		line-height: 1.4;
	}

	textarea {
		width: 100%;
		min-height: 200px;
		padding: 14px;
		margin-top: 14px;
		font-size: 14px;
		line-height: 1.4;
		resize: none;
		outline: 0;
		border: 1px dashed rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}
`;

const ButtonArea = styled.div`
	padding-bottom: 30px;
	text-align: center;

	button {
		width: 40px;
		height: 40px;
		margin: 0 4px;
		background-color: #fff;
		border-radius: 100%;
		box-shadow: ${styleVars.shadow};

		svg {
			width: 20px;
			height: 20px;
			vertical-align: middle;

			polygon {
				fill: rgb(255, 130, 33);
			}

			path {
				fill: rgb(62, 210, 229);
			}
		}
	}
`;

const Detail: FC = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [editText, setEditText] = useState('');
	const [edit, setEdit] = useState(false);
	const { detailList, isSaving } = useSelector(
		(state: RootState) => state.detail,
	);

	if (!id) return null;

	useEffect(() => {
		dispatch(loadDetailListRequest(parseInt(id)));
	}, []);

	if (!detailList) return null;

	const { text, createDate, editDate } = detailList;

	// state 수정
	const onEdit = () => {
		if (edit) return;
		setEdit(true);
	};

	// state 변경
	const onChange = (e: {
		currentTarget: { value: React.SetStateAction<string> };
	}) => {
		setEditText(e.currentTarget.value);
	};

	// 취소
	const onCancel = () => {
		setEdit(false);
		setEditText('');
	};

	// 저장
	const onSubmit = () => {
		if (isSaving) return;

		const saveTodo = {
			...detailList,
			text: editText,
			editDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
		};

		const numId = parseInt(id);

		dispatch(saveDetailListRequest(numId, saveTodo));
		setEdit(false);
		setEditText('');
	};

	return (
		<>
			<TopNavigation>
				<ButtonBack>
					<Link to="/">
						<SvgBack />
					</Link>
				</ButtonBack>
				<ButtonEdit onClick={onEdit}>
					<SvgWrite />
				</ButtonEdit>
			</TopNavigation>
			<DetailBlock>
				<div>
					<p>No : {detailList.id}</p>
					<p>작성일 : {createDate}</p>
					{editDate && <p>수정일 : {editDate}</p>}
				</div>
				{edit || <div>{text}</div>}
				{edit && <textarea onChange={onChange} defaultValue={text}></textarea>}
				{edit && (
					<ButtonArea>
						<button onClick={onCancel}>
							<SvgClose />
						</button>
						<button onClick={onSubmit}>
							<SvgCheck />
						</button>
					</ButtonArea>
				)}
			</DetailBlock>
		</>
	);
};

export default Detail;
