import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		//Actions
		addToBasket: (state, action) => {
			state.items = [...state.items, action.payload];
			//...state.items,action.payload 保留當前內容,添加的項目是有效載荷(payload)
		},
		removeFromBasket: (state, action) => {},
	},
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//選擇器Selectors 這就是從全局存儲切片中提取信息的方式,作用是將容器中特定狀態取出
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
