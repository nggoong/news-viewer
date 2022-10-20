import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./modules/newsSlice";

const store = configureStore({
    reducer: {
        news:newsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;