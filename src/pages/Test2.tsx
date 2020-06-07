import React, { useState, useRef, useCallback } from 'react';

function Test2 () {

  const [ count, setCount ] = useState(0);
  const countEl = useRef<HTMLParagraphElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  // const handleClick = (e: click) => {

  // };


  return (
    <>
      <p ref={countEl}>count : { count }</p>
      <button onClick={handleClick}>CLICK!!</button>

    </>
  );
}

export default Test2;


