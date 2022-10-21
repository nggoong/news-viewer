import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticlesType, News } from '../../model/news.model';
import { FetchNewsType } from '../../model/fetchNewsPayload.model';
import { fetchNewsBySearch } from '../../axios/axiosFunc';
import { loadingActions } from './loadingSlice';

interface InitialState{
    news:NewsArticlesType[] | any[];
    input:string
}

const initialState:InitialState = {
    news:[],
    input:""
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
        dispatch(newsActions.setDefaultNews());
        console.log(err);
        alert("에러가 발생했습니다. 잠시 후 실행해주세요!");
        dispatch(setLoadingToggle());
        return;
    }

    dispatch(setLoadingToggle());
    return data.articles;
    
})

const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers: {
        setDefaultNews:(state)=> {
            state.news = [];
        },
        setDefaultInput:(state)=> {
            state.input="";
        },
        setInput:(state, action:PayloadAction<string>) => {
            state.input= action.payload;
        }
    },
    extraReducers: {
        [fetchBySearch.fulfilled.type]:(state, action) => {
            state.news =state.news.concat(action.payload); 
        }
    }
})

const newsActions = newsSlice.actions;
export { newsActions };
export default newsSlice.reducer;