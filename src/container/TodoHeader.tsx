import React from 'react';
import styled from '@emotion/styled';
import { ButtonTypeCircle } from '../static/css-in-js/styleCommon';
import { SvgSearch } from '../static/svg/svgAsset';
import { Link } from 'react-router-dom';
import TodoInsert from '../components/TodoInsert';

const TodoHeaderBlock = styled.div`
  position: relative;
  padding-top: 20px;
  line-height: 1.6;

  strong {
    display: block;
    font-size: 18px;
    color: rgba(0,0,0,0.52);
  }

  b {
    font-size: 28px;
    color: rgb(146, 82, 241);
  }
`;

const ButtonSearch = styled(ButtonTypeCircle)`
  position: absolute;
  bottom: 50px;
  right: 0;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

function TodoHeader() {

	return (
    <TodoHeaderBlock>
      <strong>Hey Ryan!</strong>
      <b>What Your Plan?</b>
      <Link to="/search"><ButtonSearch><SvgSearch /></ButtonSearch></Link>
      <TodoInsert />
    </TodoHeaderBlock>);
}

export default TodoHeader;
