import React from 'react';
import styled from '@emotion/styled';

const TodoFooterBlock = styled.div`
  padding: 24px 0;
  font-size: 11px;
  color: rgba(0,0,0,0.42);
  text-align: center;
`;

function TodoFooter() {
	return (
    <TodoFooterBlock>
      2020 KaKao IX Corp.
    </TodoFooterBlock>
  );
}

export default TodoFooter;
