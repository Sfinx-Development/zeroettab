import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PaymentOrderIncoming, PaymentOrderOutgoing } from "../../types";
import { PostPaymentOrder } from "../api/SWEDBANKpaymentOrder";
import { addPaymentOrderIncomingToDB } from "../api/paymentOrder";

interface PaymentState {
  paymentOrderOutgoing: PaymentOrderOutgoing | null;
  paymentOrderIncoming: PaymentOrderIncoming | null;
  error: string | null;
}

export const initialState: PaymentState = {
  paymentOrderOutgoing: null,
  paymentOrderIncoming: null,
  error: null,
};

export const addPaymentOrderOutgoing = createAsyncThunk<
  PaymentOrderIncoming,
  PaymentOrderOutgoing,
  { rejectValue: string }
>("payments/addPaymentOrderOutgoing", async (paymentOrder, thunkAPI) => {
  try {
    const response = await PostPaymentOrder(paymentOrder);
    if (response) {
      const paymentOrderIncoming = await addPaymentOrderIncomingToDB(response);
      if (paymentOrderIncoming) {
        return paymentOrderIncoming;
      } else {
        return thunkAPI.rejectWithValue("failed to create payment ordcer");
      }
    } else {
      return thunkAPI.rejectWithValue("failed to create payment ordcer");
    }
  } catch (error) {
    throw new Error("Något gick fel vid .");
  }
});

// export const addPaymentOrderIncoming = createAsyncThunk<
//   PaymentOrderIncoming,
//   PaymentOrderIncoming,
//   { rejectValue: string }
// >("payments/addPaymentOrderIncoming", async (paymentOrder, thunkAPI) => {
//   try {
//     const response = await addPaymentOrderIncomingToDB(paymentOrder);
//     if (response) {
//       return response;
//     } else {
//       return thunkAPI.rejectWithValue("failed to create payment ordcer");
//     }
//   } catch (error) {
//     throw new Error("Något gick fel vid .");
//   }
// });

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPaymentOrderOutgoing.fulfilled, (state, action) => {
        if (action.payload) {
          state.paymentOrderIncoming = action.payload;
          state.error = null;
        }
      })
      .addCase(addPaymentOrderOutgoing.rejected, (state) => {
        state.error =
          "Något gick fel när payment ordern hämtades. Försök igen senare.";
      });
  },
});

export const PaymentReducer = paymentSlice.reducer;
