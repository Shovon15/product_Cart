import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
	reducer: {
		cartItem: cartReducer,
	},
});

export default store;
