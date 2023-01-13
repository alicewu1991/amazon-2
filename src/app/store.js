import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//THE GLOBAL STORE SETUP 全局狀態設置
export const store = configureStore({
	reducer: {
		basket: basketReducer,
	},
});
