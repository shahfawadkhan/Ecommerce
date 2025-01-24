import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./Slices/ProductSlice";
import { favoriteSlice } from "./Slices/FavoriteSlice";
import { CartSlice } from "./Slices/CartSlice";
export const store = configureStore({
  reducer: {
    products: productSlice.reducer, 
    favorite: favoriteSlice.reducer,
    cart : CartSlice.reducer
  },
});
