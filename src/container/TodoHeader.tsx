import React from 'react';
import styled from '@emotion/styled';

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
    color: rgba(0,0,0,0.82)
  }
`;

const ButtonSearch = styled.button`
  position: absolute;
  bottom: 50px;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fff;
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
  button {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #fff;
  }
`;

function TodoHeader() {
	return (
    <TodoHeaderBlock>
      <strong>Hey Ryan!</strong>
      <b>What Your Plan?</b>
      <ButtonSearch>검색</ButtonSearch>
      <InputBlock>
        <div><input type="text" placeholder="Input Your Plan..." /></div>
        <button type="button">추가</button>
      </InputBlock>
    </TodoHeaderBlock>);
}

export default TodoHeader;
