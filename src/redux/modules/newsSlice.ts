import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticlesType } from '../../model/news.model';
import { fetchNewsBySearch } from '../../axios/axiosFunc';

interface InitialState{
    news:NewsArticlesType[] | any[];
}

const initialState:InitialState = {
    news:["hellow"]
}

export const fetchBySearch = createAsyncThunk('news/fetchBySearch', async(payload:any, { dispatch }) => {
    let data:any;
    const {input, page} = payload;
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

    }
})

const newsActions = newsSlice.actions;
export { newsActions };
export default newsSlice.reducer;