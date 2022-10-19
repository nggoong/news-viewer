import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    news:any[];
}

const initialState:InitialState = {
    news:[]
}

const newsSlice = createSlice({
    name:"news",
    initialState:initialState,
    reducers: {

    }
})

const newsActions = newsSlice.actions;
export { newsActions };
export default newsSlice.reducer;