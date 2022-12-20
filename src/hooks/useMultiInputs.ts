import React, { useCallback, useState } from 'react';

interface authInput {
	email: string;
	password: string;
	passwordConfirm?: string;
}

const useMultiInputs = (
	initialState: authInput,
): [authInput, React.Dispatch<React.SetStateAction<authInput>>, React.ChangeEventHandler<HTMLInputElement>] => {
	const [state, setState] = useState(initialState);
	const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setState((prev) => ({ ...prev, [name]: value }));
	}, []);

	return [state, setState, changeHandler];
};

export default useMultiInputs;
