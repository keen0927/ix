/**
 * 검색 페이지
 */

import React from 'react';
import SearchList from '../container/SearchList';
import SearchHeader from '../container/SearchHeader';
import NavigationSub from '../components/NavigationSub';
import SearchFilter from '../container/SearchFilter';
import styled from '@emotion/styled';

const SearchBlock = styled.div`
	padding: 20px 24px 0 24px;
`;

const Search = () => {
	return (
		<SearchBlock>
			<NavigationSub />
			<SearchHeader />
			<SearchFilter />
			<SearchList />
		</SearchBlock>
	);
};

export default Search;
