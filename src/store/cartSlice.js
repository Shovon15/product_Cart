import { createSlice } from "@reduxjs/toolkit";

// Function to get items from local storage
const getItemsFromLocalStorage = () => {
	const items = localStorage.getItem("cartItem");
	return items ? JSON.parse(items) : [];
};

const initialState = getItemsFromLocalStorage();

const cartSlice = createSlice({
	name: "cartItem",
	initialState,
	reducers: {
		add(state, action) {
			const newItem = action.payload;
			const existingItem = state.find((item) => item.id === newItem.id);

			if (existingItem) {
				// If the product already exists in the cart, update the quantity
				existingItem.quantity += 1;
			} else {
				// If the product doesn't exist in the cart, add it as a new item with quantity 1
				state.push({ ...newItem, quantity: 1 });
			}

			localStorage.setItem("cartItem", JSON.stringify(state));
		},

		decrease(state, action) {
			const itemIdToDecrease = action.payload;
			const existingItem = state.find((item) => item.id === itemIdToDecrease.id);

			if (existingItem) {
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1;
				} else {
					// If quantity is 1 or less, remove the product from the cart and local storage
					// const existingItemIndex = state.findIndex((item) => item.id === itemIdToDecrease.id);
					// if (existingItemIndex !== -1) {
					// 	state.splice(existingItemIndex, 1);
					// }
				}
				localStorage.setItem("cartItem", JSON.stringify(state));
			}
		},

		remove(state, action) {
			const itemIdToRemove = action.payload;
			const existingItemIndex = state.findIndex((item) => item.id === itemIdToRemove.id);

			if (existingItemIndex !== -1) {
				state.splice(existingItemIndex, 1);

				const updatedStateForLocalStorage = state.filter((item) => item.id !== itemIdToRemove);
				localStorage.setItem("cartItem", JSON.stringify(updatedStateForLocalStorage));
			}
		},
	},
});

export const { add, decrease, remove } = cartSlice.actions;

export default cartSlice.reducer;
