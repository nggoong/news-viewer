import React, { useCallback, useState } from 'react';

const useMultiInputs = (initialState: object) => {
	const [state, setState] = useState(initialState);
	const changeHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { value, name } = e.target;
			setState((prev) => ({ ...prev, [name]: value }));
		},
		[state],
	);

	return [state, changeHandler];
};

export default useMultiInputs;
