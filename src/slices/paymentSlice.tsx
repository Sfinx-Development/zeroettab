import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PaymentOrder } from "../../types";
import { PostPaymentOrder } from "../api/SWEDBANKpaymentOrder";

interface PaymentState {
  paymentOrder: PaymentOrder | null;
  error: string | null;
}

export const initialState: PaymentState = {
  paymentOrder: null,
  error: null,
};

export const addPaymentOrder = createAsyncThunk<
  PaymentOrder,
  PaymentOrder,
  { rejectValue: string }
>("payments/addPaymentOrders", async (paymentOrder, thunkAPI) => {
  try {
    const response = await PostPaymentOrder(paymentOrder);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue("failed to create payment ordcer");
    }
  } catch (error) {
    throw new Error("Något gick fel vid .");
  }
});

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addPaymentOrder.fulfilled, (state, action) => {
        if (action.payload) {
          state.paymentOrder = action.payload;
          state.error = null;
        }
      })
      .addCase(addPaymentOrder.rejected, (state) => {
        state.error =
          "Något gick fel när payment ordern hämtades. Försök igen senare.";
      });
  },
});

export const PaymentReducer = paymentSlice.reducer;
