import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../slices/store";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  const state: RootState = store.getState();

  if (state.productSlice.products) {
    localStorage.setItem("products", JSON.stringify(state.productSlice.products));
  } else {
    localStorage.removeItem("products");
  }

  return result;
};

export default localStorageMiddleware;