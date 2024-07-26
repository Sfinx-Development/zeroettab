import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import localStorageMiddleware from "../middleware/localstorageMiddleware";
import { CartReducer } from "./cartSlice";
import { ProductReduces } from "./productSlice";
import { OrderReducer } from "./orderSlice";

const store = configureStore({
  reducer: {
    productSlice: ProductReduces,
    cartSlice: CartReducer,
    orderSlice: OrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
