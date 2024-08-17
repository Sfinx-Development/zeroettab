import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PaymentOrderIncoming, PaymentOrderOutgoing } from "../../types";
import {
  GetPaymentValidation,
  PostPaymentOrder,
} from "../api/SWEDBANKpaymentOrder";
import {
  addPaymentOrderIncomingToDB,
  getPaymentOrderFromDBByReference,
} from "../api/paymentOrder";

interface PaymentState {
  paymentOrderOutgoing: PaymentOrderOutgoing | null;
  paymentOrderIncoming: PaymentOrderIncoming | null;
  checkoutUrl: string | null;
  error: string | null;
}

export const initialState: PaymentState = {
  paymentOrderOutgoing: null,
  paymentOrderIncoming: getPaymentOrderIncomingFromLocalStorage(),
  checkoutUrl: null,
  error: null,
};

export default function getPaymentOrderIncomingFromLocalStorage(): PaymentOrderIncoming | null {
  const paymentOrderIncoming = localStorage.getItem("paymentOrderIncoming");

  if (paymentOrderIncoming) {
    try {
      return JSON.parse(paymentOrderIncoming)
        .paymentOrder as PaymentOrderIncoming;
    } catch (error) {
      console.error(
        "Error parsing paymentOrderIncoming from localStorage:",
        error
      );
      return null;
    }
  }

  return null;
}

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

export const getPaymentOrderIncoming = createAsyncThunk<
  PaymentOrderIncoming,
  string,
  { rejectValue: string }
>("payments/getPaymentOrderIncoming", async (orderReference, thunkAPI) => {
  try {
    const response = await getPaymentOrderFromDBByReference(orderReference);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue("failed to create payment ordcer");
    }
  } catch (error) {
    throw new Error("Något gick fel vid .");
  }
});

export const getPaymentValidation = createAsyncThunk<
  PaymentOrderIncoming,
  string,
  { rejectValue: string }
>("payments/getPaymentValidation", async (validationUrl, thunkAPI) => {
  try {
    const response = await GetPaymentValidation(validationUrl);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue("failed to get payment validation");
    }
  } catch (error) {
    throw new Error("Något gick fel vid hämtning av betalningsvalidering.");
  }
});

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPaymentOrderOutgoing.fulfilled, (state, action) => {
        if (action.payload) {
          state.paymentOrderIncoming = action.payload;
          localStorage.setItem(
            "paymentOrderIncoming",
            JSON.stringify(action.payload)
          );
          state.error = null;
        }
      })
      .addCase(addPaymentOrderOutgoing.rejected, (state) => {
        state.error =
          "Något gick fel när payment ordern hämtades. Försök igen senare.";
      })
      .addCase(getPaymentOrderIncoming.fulfilled, (state, action) => {
        if (action.payload) {
          state.paymentOrderIncoming = action.payload;
          state.error = null;
        }
      })
      .addCase(getPaymentOrderIncoming.rejected, (state) => {
        state.error =
          "Något gick fel när payment ordern hämtades. Försök igen senare.";
      });
  },
});

export const PaymentReducer = paymentSlice.reducer;
