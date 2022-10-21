import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./modules/newsSlice";
import loadingSlice from "./modules/loadingSlice";

const store = configureStore({
    reducer: {
        news:newsSlice,
        loading:loadingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;