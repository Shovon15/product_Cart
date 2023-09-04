import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
// 	const items = localStorage.getItem("cart");
//   return items ? JSON.parse(items) : [];
// ];
// Function to get items from local storage
const getItemsFromLocalStorage = () => {
	const items = localStorage.getItem("cartItem");
	return items ? JSON.parse(items) : [];
};

const initialState = getItemsFromLocalStorage();

// export
const cartSlice = createSlice({
	name: "cartItem",
	initialState,
	reducers: {
		add(state, action) {
			state.push(action.payload);
			localStorage.setItem("cartItem", JSON.stringify(state.map((item) => item)));
		},
		// remove(state, action) {
		// 	return state.filter((item) => item.id !== action.payload);
		// },
		remove(state, action) {
			const itemIdToRemove = action.payload;
			const newState = state.filter((item) => item.id !== itemIdToRemove);
			localStorage.setItem("cartItem", JSON.stringify(newState));
			return newState; // Update the state in your reducer
		},
	},
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
