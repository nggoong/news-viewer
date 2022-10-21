import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticlesType, News } from '../../model/news.model';
import { FetchNewsType } from '../../model/fetchNewsPayload.model';
import { fetchNewsBySearch } from '../../axios/axiosFunc';
import { loadingActions } from './loadingSlice';

interface InitialState{
    news:NewsArticlesType[] | any[];
}

const initialState:InitialState = {
    news:[]
}

export const fetchBySearch = createAsyncThunk('news/fetchBySearch', async(payload:FetchNewsType, { dispatch }) => {
    let data:News;
    const { input, page } = payload;
    const { setLoadingToggle } = loadingActions;
    try {
        dispatch(setLoadingToggle());
        const res = await fetchNewsBySearch(input, page);
        data = res.data;
        
    }
    catch(err) {
        console.log(err);
        alert("에러가 발생했습니다. 잠시 후 실행해주세요!");
        dispatch(setLoadingToggle());
        return;
    }
    
    dispatch(setLoadingToggle());
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