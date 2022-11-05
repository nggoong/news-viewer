import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	loading: boolean;
}

const initialState: InitialState = {
	loading: false,
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		setLoadingToggle: (state) => {
			state.loading = !state.loading;
		},
	},
});

const loadingActions = loadingSlice.actions;
export { loadingActions };
export default loadingSlice.reducer;
