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
		removeFromBasket: (state, action) => {
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id,
			);

			let newBasket = [...state.items];

			if (index >= 0) {
				//該項目存在於購物籃中...將其刪除...
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product(id:${action.payload.id})as its not in basket!`,
				);
			}

			state.items = newBasket;
		},
	},
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//選擇器Selectors 這就是從全局存儲切片中提取信息的方式,作用是將容器中特定狀態取出
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
	state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
