/**
 * Container > Todo Search Header
 */

import React, { useState, useCallback, ChangeEvent, FormEvent, FC, useRef } from 'react';
import styled from '@emotion/styled';
import { SvgSearch } from '../static/svg/svgAsset';
import { ButtonTypeCircle } from '../static/css-in-js/styleCommon';
import { useDispatch, useSelector } from 'react-redux';
import { searchListRequest } from '../modules/search';
import { RootState } from '../modules';

const SearchInputBlock = styled.div`
  display: flex;
	justify-content: space-between;
	height: 40px;
  margin-top: 10px;

  div {
    display: flex;
		align-items: center;
		flex: 1;
		height: 40px;
		margin-right: 12px;
		border-bottom: 2px solid rgba(0, 0, 0, 0.42);

		input {
			width: 100%;
			height: 24px;
			border: 0;
			background-color: transparent;
			justify-content: center;
			font-size: 14px;
			color: inherit;
		}    
  }
`;

const ButtonSearch = styled(ButtonTypeCircle)`
	width: 40px;
	height: 40px;
	border-radius: 100%;

	svg {
		width: 20px;
		height: 20px;
	}
`;

const SearchHeader: FC = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const { isSearching } = useSelector((state: RootState) => state.search);
	const inputEl = useRef<HTMLInputElement>(null);

	const onChange = useCallback<(e: ChangeEvent<HTMLInputElement>) => void>(
		e => {
			setValue(e.target.value);
		},
		[value],
	);

	const onSubmit = useCallback<(e: FormEvent<HTMLFormElement>) => void>(
		e => {
      e.preventDefault();
      
      if (!value || !value.trim()) {
				return alert('검색어를 1자 이상 입력 해 주세요.');
			}
			
			if (isSearching) return;

			dispatch(searchListRequest(value));

			if (inputEl) {
				setValue('');
				inputEl.current?.focus();
			}
			
		},
		[value],
	);

	return (
    <form onSubmit={onSubmit}>
      <SearchInputBlock>
        <div><input type="text" value={value} ref={inputEl} onChange={onChange} placeholder="Input Your Search Keyword.."/></div>
        <ButtonSearch type="submit">
          <SvgSearch />
        </ButtonSearch>
      </SearchInputBlock>
      
		</form>
	);
};

export default SearchHeader;
