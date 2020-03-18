// import React, { Suspense, lazy } from 'react';
// const HomePopularKeyword = lazy(() => import('../containers/Home/HomePopularKeyword'));
import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
// import styled from '@emotion/styled';

function TodoSearch() {
	const [value, setValue] = useState('');

	const onSubmit = useCallback<(e: FormEvent<HTMLFormElement>) => void>(
		e => {
			e.preventDefault();
			console.log(value);
		},
		[value],
	);

	const onChange = useCallback<(e: ChangeEvent<HTMLInputElement>) => void>(
		e => {
			setValue(e.target.value);
			console.log('value : ', value);
		},
		[value],
	);

	return (
		<form onSubmit={onSubmit}>
			<input type="text" onChange={onChange} />
			<button type="submit">검색</button>
		</form>
	);
}

export default TodoSearch;
