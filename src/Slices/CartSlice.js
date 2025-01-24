import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    message: "",
  },
  reducers: {
    toggleCart: (state, action) => {
      const isExist = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        state.message = "Remove cart product";
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.message = "Add cart product";
        state.cartProducts.push({...action.payload, quantity: 1});
      }
    },
    updateQuantity: (state, action) => {
      const index = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cartProducts[index] = {
          ...state.cartProducts[index],
          quantity: action.payload.quantity
        };
      }
    },
  },
});

export const { toggleCart, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;