import React, { useState, useCallback } from 'react';

const useOnlyInput = (
	initialState: string,
): [string, React.Dispatch<React.SetStateAction<string>>, React.ChangeEventHandler<HTMLInputElement>] => {
	const [state, setState] = useState(initialState);
	const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setState(value);
	}, []);
	return [state, setState, changeHandler];
};
export default useOnlyInput;
