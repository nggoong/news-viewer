import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./modules/newsSlice";
import loadingSlice from "./modules/loadingSlice";
import userSlice from "./modules/userSlice";

const store = configureStore({
    reducer: {
        news:newsSlice,
        loading:loadingSlice,
        user:userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;