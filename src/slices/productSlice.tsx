/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addProductToDB } from "../api/product";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    in_store: boolean;
    amount: number;
    // subcategory_id: string;
    // weight: number;
    // length: number;
    // width: number;
    // height: number;
    // color: string;
    // size: number; // eller string
    // material: string;
    // rabatt: number;
    // launch_date: string; // String för slice
  }

interface ProductState {
  products: Product[];
  error: string | null;
}

export const initialState: ProductState = {
  products: [],
  error: null,
};


export const addProductAsync = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string }
>("Products/addProduct", async (todo, thunkAPI) => {
  try {
    const createdProduct = await addProductToDB(todo);
    if (createdProduct) {
      return createdProduct;
    } else {
      return thunkAPI.rejectWithValue("failed to create product");
    }
  } catch (error) {
    throw new Error("Något gick fel vid .");
  }
});



const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
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

  },
});


export const ProductReduces = ProductSlice.reducer;
export type { ProductState };