import React, { useState, useCallback } from 'react';

const useOnlyInput = (initialState: string) => {
	const [state, setState] = useState(initialState);
	const changeHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setState(value);
		},
		[state],
	);
	return [state, changeHandler];
};
export default useOnlyInput;
