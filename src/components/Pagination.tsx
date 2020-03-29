import React, { useState } from 'react';
import styled from '@emotion/styled';

const PaginationBlock = styled.ul`
  margin-top: 24px;
  text-align: center;

  li {
    display: inline-block;
    margin: 0 5px;
    font-size: 13px;
    color: rgba(0,0,0,0.4);

    &.active {
      color: rgb(146,82,241);
      font-weight: bold;
    }
  }
`;

const Pagination = () => {
	const [currentPage, setCurrentPage] = useState(0);
  // const pageLimit = 10;

  // const limitPerPage = (page: number) => {
  //   setCurrentPage(page - 1);
  // };

  // console.log('currentPage : ', currentPage);

	return (
		<>
			{currentPage === 0 && (
				<PaginationBlock>
          <li className="active">{currentPage + 1}</li>
					<li>{currentPage + 2}</li>
					<li>{currentPage + 3}</li>
					<li onClick={() => setCurrentPage(currentPage + 1)}>다음</li>
				</PaginationBlock>
			)}
			{currentPage > 0 && (
				<PaginationBlock>
					<li onClick={() => setCurrentPage(currentPage - 1)}>이전</li>
					<li>{currentPage + 1}</li>
					<li className="active">{currentPage + 2}</li>
					<li>{currentPage + 3}</li>
					<li onClick={() => setCurrentPage(currentPage + 1)}>다음</li>
				</PaginationBlock>
      )}
      {/* <PaginationBlock>
        <li onClick={() => limitPerPage(currentPage - 1)}>이전</li>
        <li>{currentPage - 1}</li>
        <li>{currentPage}</li>
        <li>{currentPage + 1}</li>
      </PaginationBlock> */}
		</>
	);
};

export default Pagination;
