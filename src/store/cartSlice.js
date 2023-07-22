import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./uiSlice";

const initialState = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
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
      state.changed = true;

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

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     try {
//       dispatch(
//         showNotification({
//           status: "Pending",
//           title: "Sending...",
//           message: "Sending cart data!",
//         })
//       );

//       const response = await fetch(
//         "https://reduxcart-5a1f5-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending cart data failed!");
//       }

//       dispatch(
//         showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Cart data sent successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed!",
//         })
//       );
//     }
//   };
// };

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, replaceCart } =
  cartSlice.actions;
