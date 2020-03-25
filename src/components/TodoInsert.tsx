import React, { FC, useState, useCallback, useRef, ChangeEvent, FormEvent } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonTypeCircle } from '../static/css-in-js/styleCommon';
import { SvgWrite } from '../static/svg/svgAsset';
import { addListRequest } from '../modules/todos';
import { RootState } from '../modules';
import dayjs from 'dayjs';

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

// const ButtonWrite = styled(ButtonTypeCircle)<{ disabled: boolean }>`
const ButtonWrite = styled(ButtonTypeCircle)<{ disabled: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  /* border: ${props => props.disabled ? '1px solid red' : '1px solid blue'}; */

  &:disabled {
    cursor: not-allowed;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const TodoInsert: FC = () => {

  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const { currentListId, isAddingList } = useSelector((state: RootState) => state.todos);
  const inputEl = useRef<HTMLInputElement>(null);

  const onChange = useCallback<(e: ChangeEvent<HTMLInputElement>) => void>((e) => {
    setTodo(e.target.value);
  },[todo]);

  const onSubmit = useCallback<(e: FormEvent) => void>((e) => {
    e.preventDefault();

    if (!todo || !todo.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const currentDay = dayjs().format('YYYY-MM-DD');

    const data = {
      id: currentListId + 1,
      text: todo,
      createDate: currentDay,
      editDate: '',
      done: false,
      reference: [],
    };

    dispatch(addListRequest(data));
    
    setTodo('');
    
    if(inputEl) {
      inputEl.current?.focus();
    }

  },[todo]);

  return (
    <form onSubmit={onSubmit}>
      <TodoInsertBlock>
        <div><input type="text" ref={inputEl} value={todo} onChange={onChange} onSubmit={onSubmit} placeholder="Input Your Plan..." /></div>
        <ButtonWrite type="submit" disabled={isAddingList} ><SvgWrite /></ButtonWrite>
      </TodoInsertBlock>
    </form>
  );
};

export default TodoInsert;