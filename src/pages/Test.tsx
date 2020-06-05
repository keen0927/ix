import React, { useState, useRef } from 'react';

function Test() {
  
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    setFirst(Math.ceil(Math.random() * 9));
    if (input) input.focus();
  };
  
  return (
    <>
      <div>{first}</div>
      <form onSubmit={onSubmitForm}>
      </form>
      <input type="text" ref={inputEl} />
    </>
  );
}

export default Test;