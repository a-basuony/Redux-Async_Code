import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPriceOfItem =
          existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPriceOfItem: newItem.price,
        });
      }

      // Recalculate totalPrice and totalAmount
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPriceOfItem,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemIdToRemove
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== itemIdToRemove
          );
        } else {
          existingItem.quantity--;
          existingItem.totalPriceOfItem =
            existingItem.price * existingItem.quantity;
        }

        // Recalculate totalPrice and totalAmount
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.totalPriceOfItem,
          0
        );
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
