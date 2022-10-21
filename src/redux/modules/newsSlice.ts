import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticlesType } from '../../model/news.model';
import { FetchNewsType } from '../../model/fetchNews.model';
import { fetchNewsBySearch } from '../../axios/axiosFunc';

interface InitialState{
    news:NewsArticlesType[] | any[];
}

const initialState:InitialState = {
    news:[]
}

export const fetchBySearch = createAsyncThunk('news/fetchBySearch', async(payload:FetchNewsType, { dispatch }) => {
    let data:any;
    const { input, page } = payload;
    try {
        const res = await fetchNewsBySearch(input, page);
        data = res.data;
    }
    catch(err) {
        console.log(err);
        return;
    }

    return data;
    
})

const newsSlice = createSlice({
    name:"news",
    initialState:initialState,
    reducers: {
        setDefaultNews:(state, action: PayloadAction<InitialState>)=> {
            state.news = [];
        }
    },
    extraReducers: {
        [fetchBySearch.fulfilled.type]:(state, action) => {
            state.news = action.payload;
        }
    }
})

const newsActions = newsSlice.actions;
export { newsActions };
export default newsSlice.reducer;