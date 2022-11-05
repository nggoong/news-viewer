import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, limit } from 'firebase/firestore';
// import { News, NewsArticlesType } from "../../model/news.model";
import { db } from '../../shared/firebase';
import { RootState } from '../configStore';

interface InitialState {
	favorites: any[];
}

const initialState: InitialState = {
	favorites: [],
};

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async (_, { getState, dispatch }) => {
	let data: any;
	let newData: any[] = [];
	let new_obj: any;
	const userInfo = (getState() as RootState).user.email;
	// const userInfo = "dev@dev.com";
	const favoritesCollection = collection(db, `${userInfo}_favorites`);
	try {
		data = await getDocs(query(favoritesCollection));
		data.forEach((element: any) => {
			new_obj = { ...element.data(), docId: element.id };
			newData.push(new_obj);
		});
	} catch (err) {
		console.log(err);
	}

	return newData!;
});

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setDefaultFavorites: (state) => {
			state.favorites = [];
		},
	},
	extraReducers: {
		[fetchFavorites.fulfilled.type]: (state, action) => {
			state.favorites = action.payload;
		},
	},
});

const favoritesActions = favoritesSlice.actions;
export { favoritesActions };
export default favoritesSlice.reducer;
