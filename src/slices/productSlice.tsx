/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addProductToDB, getProductsFromDB } from "../api/product";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  in_store: boolean;
  amount: number;
  subcategory_id: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  color: string;
  size: number; // eller string
  material: string;
  rabatt: number;
  launch_date: string; // String för slice
}

interface ProductState {
  products: Product[];
  activeProduct: Product | undefined;
  error: string | null;
}

export const initialState: ProductState = {
  products: [],
  activeProduct: undefined,
  error: null,
};

export const addProductAsync = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string }
>("products/addProduct", async (product, thunkAPI) => {
  try {
    const createdProduct = await addProductToDB(product);
    if (createdProduct) {
      return createdProduct;
    } else {
      return thunkAPI.rejectWithValue("failed to create product");
    }
  } catch (error) {
    throw new Error("Något gick fel vid .");
  }
});

export const getProductAsync = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/getProducts", async (_, thunkAPI) => {
  try {
    const products = await getProductsFromDB();
    if (products) {
      return products;
    } else {
      return thunkAPI.rejectWithValue("failed to fetch products");
    }
  } catch (error) {
    throw new Error("Något gick fel vid hämtning av products.");
  }
});

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.products.push(action.payload);
          state.error = null;
        }
      })
      .addCase(addProductAsync.rejected, (state) => {
        state.error =
          "Något gick fel när produkten skapades. Försök igen senare.";
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
          state.error = null;
        }
      })
      .addCase(getProductAsync.rejected, (state) => {
        state.error =
          "Något gick fel när produkter hämtades. Försök igen senare.";
      });
  },
});

export const ProductReduces = ProductSlice.reducer;
export type { ProductState };
export const { setActiveProduct } = ProductSlice.actions;
