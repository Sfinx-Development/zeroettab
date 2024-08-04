import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Cart {
  id: string;
  created_date: string;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  cart_id: string;
  product_id: string;
  size: string;
  quantity: number;
  price: number;
}

interface CartState {
  cart: Cart | undefined;
}

const createNewCart = (): Cart => {
  return {
    id: uuidv4(),
    created_date: new Date().toISOString(),
    items: [],
  };
};

const getInitialCartState = (): CartState => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return { cart: JSON.parse(storedCart) };
  } else {
    const newCart = createNewCart();
    localStorage.setItem("cart", JSON.stringify(newCart));
    return { cart: newCart };
  }
};
const initialState: CartState = getInitialCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      if (state.cart) {
        state.cart.items.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      if (state.cart) {
        state.cart.items = state.cart.items.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    updateItem: (state, action: PayloadAction<CartItem>) => {
      if (state.cart) {
        const index = state.cart.items.findIndex(
          (item) => item.id == action.payload.id
        );
        if (index >= 0 && action.payload.quantity > 0) {
          state.cart.items[index] = action.payload;
        } else if (index >= 0 && action.payload.quantity == 0) {
          state.cart.items = state.cart.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    clearCart: (state) => {
      state.cart = undefined;
      localStorage.removeItem("cart");
    },
  },
});

export const { setCart, addItem, removeItem, clearCart, updateItem } =
  cartSlice.actions;
export const CartReducer = cartSlice.reducer;
