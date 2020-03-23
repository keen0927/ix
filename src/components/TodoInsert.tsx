import React, { FC, useState, useCallback, ChangeEvent, FormEvent } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { ButtonTypeCircle } from '../static/css-in-js/styleCommon';
import { SvgWrite } from '../static/svg/svgAsset';

const TodoInsertBlock = styled.form`
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

const TodoInsert: FC = () => {

  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onChange = useCallback<(e: ChangeEvent<HTMLInputElement>) => void>((e) => {
    setTodo(e.target.value);
  },[todo]);

  const onSubmit = useCallback<(e: FormEvent) => void>((e) => {
    e.preventDefault();
    const data = {
      id: 1,
      text: todo,
      createDate: '',
      editDate: '',
      done: false,
      reference: [],
    };

  },[]);

  return (
    <TodoInsertBlock onSubmit={onSubmit}>
      <div><input type="text" onChange={onChange} placeholder="Input Your Plan..." /></div>
      <ButtonWrite type="button"><SvgWrite /></ButtonWrite>
    </TodoInsertBlock>
  );
};

export default TodoInsert;