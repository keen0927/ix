import React from 'react';
import styled from '@emotion/styled';
import { ButtonTypeCircle } from '../static/css-in-js/styleCommon';
import { SvgSearch, SvgWrite } from '../static/svg/svgAsset';
import { Link } from 'react-router-dom';

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

const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    height: 40px;
    margin-right: 12px;
    border-bottom: 2px solid rgba(0,0,0,0.42);

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

const ButtonWrite = styled(ButtonTypeCircle)`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  svg {
    width: 20px;
    height: 20px;
  }
`;

function TodoHeader() {

	return (
    <TodoHeaderBlock>
      <strong>Hey Ryan!</strong>
      <b>What Your Plan?</b>
      <Link to="/search"><ButtonSearch><SvgSearch /></ButtonSearch></Link>
      <InputBlock>
        <div><input type="text" placeholder="Input Your Plan..." /></div>
        <ButtonWrite type="button"><SvgWrite /></ButtonWrite>
      </InputBlock>
    </TodoHeaderBlock>);
}

export default TodoHeader;
