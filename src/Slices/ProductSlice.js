import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/allProduct",
  async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    message: "",
    filterProducts: [],
    searchQuery: "",
    category: "",
    addCart : 0,
    addFav : 0
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filterProducts = state.products.filter((product) => 
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.filterProducts = state.products.filter((product) => 
        state.category
          ? product.category.name.toLowerCase() === state.category.toLowerCase()
          : true
      );
    },
    incrementCart: (state, action) => {
      state.addCart += 1;
    },
    incrementFav: (state, action) => {
      state.addFav += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.filterProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });
  },
});

export const {setProduct , setCategory, setSearchQuery , incrementCart , incrementFav } = productSlice.actions;
export default productSlice.reducer;