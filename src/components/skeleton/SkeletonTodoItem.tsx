import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import styleVars from '../../static/css-in-js/styleVars';

const skeleton = css({
	content: "''",
	position: "absolute",
	top: "0",
	left: "0",
	right: "0",
	bottom: "0",
	width: "100%",
	height: "100%",
	backgroundImage:
		"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
	backgroundSize: "140px 100%",
	backgroundPosition: "0 0",
	backgroundRepeat: "no-repeat",
	animation: "shine 1s infinite",
});

const SkeletonTodoItemBlock = styled.ul`
  margin-top: 24px;
`;

const SkeletonItem = styled.li`
  position: relative;
  overflow: hidden;
  margin-bottom: 14px;
  border-radius: 10px;
  box-shadow: ${styleVars.shadow};
  list-style: none;
  
  &:after {
    ${skeleton}
  }

  span {
    display: block;
    width: 100%;
    height: 62px;
    background-image: linear-gradient( rgba(0,0,0,0.1), 100%, transparent 0);
    background-position: 0 
  }

  @keyframes shine {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: calc(100% + 200px) 0;
    }
  }
`;

const SkeletonTodoItem = () => {
  return (
    <SkeletonTodoItemBlock>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
      <SkeletonItem><span></span></SkeletonItem>
    </SkeletonTodoItemBlock>
  );
};

export default SkeletonTodoItem;
