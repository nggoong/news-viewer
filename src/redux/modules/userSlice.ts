import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	email: string;
}

const initialState: InitialState = {
	email: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setDefaultEmail: (state) => {
			state.email = '';
		},
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
	},
});

const userActions = userSlice.actions;
export { userActions };
export default userSlice.reducer;
