import React, { useState, useCallback, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { ButtonTypeCircle } from '../static/css-in-js/styleCommon';
import { SvgWrite } from '../static/svg/svgAsset';

const TodoInsertBlock = styled.div`
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

const TodoInsert: React.FC = () => {

  const [todo, setTodo] = useState('');

  const onChange = useCallback<(e: ChangeEvent<HTMLInputElement>) => void>((e) => {
    setTodo(e.target.value);
  },[todo]);

  console.log('todo : ', todo);


  return (
    <TodoInsertBlock>
      <div><input type="text" onChange={onChange} placeholder="Input Your Plan..." /></div>
      <ButtonWrite type="button"><SvgWrite /></ButtonWrite>
    </TodoInsertBlock>
  );
};

export default TodoInsert;