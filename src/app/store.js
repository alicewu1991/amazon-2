import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import logger from "redux-logger";

//THE GLOBAL STORE SETUP 全局狀態設置
export const store = configureStore({
	middleware: [logger],
	reducer: {
		basket: basketReducer,
	},
});
