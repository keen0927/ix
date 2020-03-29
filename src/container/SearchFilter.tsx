import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FilterListProps } from '../modules/search/types';
import ButtonFilter from '../components/ButtonFilter';
import { useDispatch } from 'react-redux';
import { filterSearchList } from '../modules/search';

const SearchFilterBlock = styled.div`
	margin-top: 7px;
`;

const SearchFilter: FC = () => {

	const dispatch = useDispatch();
  
	const filterLists: FilterListProps[] = [
		{ text: 'ID낮은순', case: 'id'},
  ];
  
  const onSort = (active: boolean) => {
		dispatch(filterSearchList(active));
  };

	return (
		<SearchFilterBlock>
			{filterLists.map((filterList, i) => (
        <ButtonFilter 
          filterList={filterList} 
          onSort={onSort}
          key={i} />
			))}
		</SearchFilterBlock>
	);
};

export default SearchFilter;
