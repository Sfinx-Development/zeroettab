import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Paid } from "../../swedbankTypes";
import { addOrderToDB, editOrderInDB, getOrderFromDB } from "../api/order";

export interface Order {
  id: string;
  reference: string;
  total_amount: number;
  vat_amount: number;
  created_date: string;
  status: string;
  items: OrderItem[];
  paymentInfo?: Paid;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  vatPercent: number; // New field
  vatAmount: number; // New field
}

interface OrderState {
  order: Order | null;
  error: string | null;
}

const getInitialOrderState = (): OrderState => {
  const storedOrder = localStorage.getItem("order");
  return storedOrder
    ? { order: JSON.parse(storedOrder), error: null }
    : { order: null, error: null };
};

const initialState: OrderState = getInitialOrderState();

const calculateVatAmount = (price: number, vatPercent: number): number => {
  const vatAmount = price * (vatPercent / 100);
  return Math.round(vatAmount);
};

const calculateTotalVat = (items: OrderItem[]): number => {
  return items.reduce(
    (total, item) => total + item.vatAmount * item.quantity,
    0
  );
};

const calculateTotalAmount = (items: OrderItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const addOrderAsync = createAsyncThunk<
  Order,
  Order,
  { rejectValue: string }
>("orders/addOrder", async (order, thunkAPI) => {
  try {
    order.items.forEach((item) => {
      item.vatPercent = 12; // 12% VAT
      item.vatAmount = calculateVatAmount(item.price, item.vatPercent);
    });

    order.total_amount = calculateTotalAmount(order.items);
    order.vat_amount = calculateTotalVat(order.items);

    const createdOrder = await addOrderToDB(order);
    if (createdOrder) {
      localStorage.setItem("order", JSON.stringify(createdOrder));
      return createdOrder;
    } else {
      return thunkAPI.rejectWithValue("failed to create order");
    }
  } catch (error) {
    throw new Error("Något gick fel vid skapande av order.");
  }
});

export const updateOrderAsync = createAsyncThunk<
  Order,
  Order,
  { rejectValue: string }
>("orders/updateOrder", async (order, thunkAPI) => {
  try {
    console.log("ORDER TO UPDATE: ", order);

    // Skapa kopior av items innan uppdatering
    const updatedItems = order.items.map((item) => {
      const newItem = { ...item };
      newItem.vatPercent = 12; // 12% VAT
      // newItem.vatAmount = calculateVatAmount(newItem.price, newItem.vatPercent);
      newItem.vatAmount = 21;
      return newItem;
    });

    const updatedOrder = {
      ...order,
      items: updatedItems,
      total_amount: calculateTotalAmount(updatedItems),
      // vat_amount: calculateTotalVat(updatedItems),
      vat_amount: 12,
    };

    console.log("UPDATED ORDER DATA: ", updatedOrder);

    // Försök att uppdatera ordern i databasen
    const response = await editOrderInDB(updatedOrder);
    if (response) {
      console.log("ORDER SUCCESSFULLY UPDATED: ", response);
      return response;
    } else {
      console.error("FAILED TO UPDATE ORDER: No order returned");
      return thunkAPI.rejectWithValue(
        "Failed to update order: No order returned"
      );
    }
  } catch (error) {
    console.error("ERROR UPDATING ORDER: ", error);
    return thunkAPI.rejectWithValue(
      error instanceof Error
        ? error.message
        : "Något gick fel vid uppdatering av order."
    );
  }
});

export const getOrderAsync = createAsyncThunk<
  Order,
  string,
  { rejectValue: string }
>("orders/getOrder", async (userid, thunkAPI) => {
  try {
    const order = await getOrderFromDB(userid);
    if (order) {
      return order;
    } else {
      return thunkAPI.rejectWithValue("failed to fetch order");
    }
  } catch (error) {
    throw new Error("Något gick fel vid hämtning av order.");
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
      localStorage.setItem("order", JSON.stringify(state.order));
    },
    addItem: (state, action: PayloadAction<OrderItem>) => {
      if (state.order) {
        const item = action.payload;
        item.vatPercent = 12; // 12% VAT
        item.vatAmount = calculateVatAmount(item.price, item.vatPercent);

        state.order.items.push(item);
        state.order.total_amount = calculateTotalAmount(state.order.items);
        state.order.vat_amount = calculateTotalVat(state.order.items);

        localStorage.setItem("order", JSON.stringify(state.order));
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      if (state.order) {
        state.order.items = state.order.items.filter(
          (item) => item.id !== action.payload
        );
        state.order.total_amount = calculateTotalAmount(state.order.items);
        state.order.vat_amount = calculateTotalVat(state.order.items);

        localStorage.setItem("order", JSON.stringify(state.order));
      }
    },
    updateItem: (state, action: PayloadAction<OrderItem>) => {
      if (state.order) {
        const index = state.order.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index >= 0) {
          const updatedItem = action.payload;
          updatedItem.vatPercent = 12; // 12% VAT
          updatedItem.vatAmount = calculateVatAmount(
            updatedItem.price,
            updatedItem.vatPercent
          );

          if (updatedItem.quantity > 0) {
            state.order.items[index] = updatedItem;
          } else {
            state.order.items = state.order.items.filter(
              (item) => item.id !== updatedItem.id
            );
          }

          state.order.total_amount = calculateTotalAmount(state.order.items);
          state.order.vat_amount = calculateTotalVat(state.order.items);

          localStorage.setItem("order", JSON.stringify(state.order));
        }
      }
    },
    clearOrder: (state) => {
      state.order = null;
      localStorage.removeItem("order");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.order = action.payload;
          state.error = null;
        }
      })
      .addCase(getOrderAsync.rejected, (state) => {
        state.error = "Något gick fel när ordern hämtades. Försök igen senare.";
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.order = action.payload;
          state.error = null;
        }
      })
      .addCase(addOrderAsync.rejected, (state) => {
        state.error =
          "Något gick fel när ordern uppdaterades. Försök igen senare.";
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.order = action.payload;
          localStorage.setItem("order", JSON.stringify(action.payload));
          state.error = null;
        }
      })
      .addCase(updateOrderAsync.rejected, (state) => {
        state.error =
          "Något gick fel när ordern uppdaterades. Försök igen senare.";
      });
  },
});

export const { setOrder, addItem, removeItem, clearOrder, updateItem } =
  orderSlice.actions;
export const OrderReducer = orderSlice.reducer;
