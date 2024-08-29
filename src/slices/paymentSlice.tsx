import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PaymentAborted,
  PaymentCancelled,
  PaymentFailed,
  PaymentOrderResponse,
  Transaction,
  ValidPaymentOrder,
} from "../../swedbankTypes";
import { PaymentOrderIncoming, PaymentOrderOutgoing } from "../../types";
import {
  CapturePayment,
  GetPaymentAbortedValidation,
  GetPaymentCancelledValidation,
  GetPaymentFailedValidation,
  GetPaymentPaidValidation,
  PostPaymentOrder,
} from "../api/SWEDBANKpaymentOrder";
import { addPaymentOrderIncomingToDB } from "../api/paymentOrder";

interface PaymentState {
  paymentOrderOutgoing: PaymentOrderOutgoing | null;
  paymentOrderIncoming: PaymentOrderIncoming | null;
  checkoutUrl: string | null;
  paymentInfo: ValidPaymentOrder | null;
  paymentFailed: PaymentFailed | null;
  paymentAborted: PaymentAborted | null;
  paymentCancelled: PaymentCancelled | null;
  paymentCapture: PaymentOrderResponse | null;
  error: string | null;
}

export const initialState: PaymentState = {
  paymentOrderOutgoing: null,
  paymentOrderIncoming: getPaymentOrderIncomingFromLocalStorage(),
  checkoutUrl: null,
  paymentInfo: getPaymentInfoFromLocalStorage(),
  paymentFailed: null,
  paymentAborted: null,
  paymentCancelled: null,
  paymentCapture: null,
  error: null,
};

function getPaymentOrderIncomingFromLocalStorage(): PaymentOrderIncoming | null {
  const paymentOrderIncoming = localStorage.getItem("paymentOrderIncoming");

  if (paymentOrderIncoming) {
    try {
      return JSON.parse(paymentOrderIncoming) as PaymentOrderIncoming;
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

function savePaymentInfoToLocalStorage(paymentInfo: ValidPaymentOrder | null) {
  if (paymentInfo) {
    try {
      localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
    } catch (error) {
      console.error("Error saving paymentInfo to localStorage:", error);
    }
  } else {
    localStorage.removeItem("paymentInfo");
  }
}

function getPaymentInfoFromLocalStorage(): ValidPaymentOrder | null {
  const paymentInfo = localStorage.getItem("paymentInfo");

  if (paymentInfo) {
    try {
      return JSON.parse(paymentInfo) as ValidPaymentOrder;
    } catch (error) {
      console.error("Error parsing paymentInfo from localStorage:", error);
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

// export const getPaymentOrderIncoming = createAsyncThunk<
//   PaymentOrderIncoming,
//   string,
//   { rejectValue: string }
// >("payments/getPaymentOrderIncoming", async (orderReference, thunkAPI) => {
//   try {
//     const response = await getPaymentOrderFromDBByReference(orderReference);
//     if (response) {
//       return response;
//     } else {
//       return thunkAPI.rejectWithValue("failed to create payment ordcer");
//     }
//   } catch (error) {
//     throw new Error("Något gick fel vid .");
//   }
// });
export const getPaymentPaidValidation = createAsyncThunk<
  ValidPaymentOrder | PaymentAborted | PaymentCancelled | PaymentFailed,
  PaymentOrderIncoming,
  { rejectValue: string }
>("payments/getPaymentValidation", async (order, thunkAPI) => {
  try {
    const response = await GetPaymentPaidValidation(order.paymentOrder.paid.id);
    if (response) {
      console.log("paid VALIDATIONNNNNNNNNNN: ", response);
      savePaymentInfoToLocalStorage(response);
      return response;
    }
    const failed = await GetPaymentFailedValidation(
      order.paymentOrder.failed.id
    );
    if (failed) {
      return failed;
    }
    const aborted = await GetPaymentAbortedValidation(
      order.paymentOrder.aborted.id
    );
    if (aborted) {
      return aborted;
    }

    const cancelled = await GetPaymentCancelledValidation(
      order.paymentOrder.cancelled.id
    );
    if (cancelled) {
      return cancelled;
    }

    return thunkAPI.rejectWithValue("failed to get payment validation");
  } catch (error) {
    return thunkAPI.rejectWithValue(
      "Något gick fel vid hämtning av betalningsvalidering."
    );
  }
});

export const getPaymentCaptureAsync = createAsyncThunk<
  PaymentOrderResponse, // Return type
  { transaction: Transaction; url: string }, // Argument type
  { rejectValue: string } // ThunkAPI type
>("payments/getPaymentCaptureAsync", async ({ transaction, url }, thunkAPI) => {
  try {
    const response = await CapturePayment({
      transaction: transaction,
      captureUrl: url,
    });
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue("failed to capture payment");
    }
  } catch (error) {
    throw new Error("Något gick fel vid Betalning (Capture).");
  }
});

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    clearPaymentOrder: (state) => {
      state.paymentOrderIncoming = null;
      localStorage.removeItem("paymentOrderIncoming");
    },
    clearPaymentInfo: (state) => {
      state.paymentOrderIncoming = null;
      localStorage.removeItem("paymentInfo");
    },
  },
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
      // .addCase(getPaymentOrderIncoming.fulfilled, (state, action) => {
      //   if (action.payload) {
      //     state.paymentOrderIncoming = action.payload;
      //     state.error = null;
      //   }
      // })
      // .addCase(getPaymentOrderIncoming.rejected, (state) => {
      //   state.error =
      //     "Något gick fel när payment ordern hämtades. Försök igen senare.";
      // })
      .addCase(getPaymentPaidValidation.fulfilled, (state, action) => {
        const payload = action.payload;
        state.paymentInfo = payload as ValidPaymentOrder;
        // } else if ("abortReason" in payload) {
        //   state.paymentAborted = payload as PaymentAborted;
        // } else if ("cancelReason" in payload) {
        //   state.paymentCancelled = payload as unknown as PaymentCancelled;
        // } else if ("problem" in payload) {
        //   state.paymentFailed = payload as PaymentFailed;
        // } else {
        //   state.error = "Unknown payment status";
        // }
      })
      .addCase(getPaymentPaidValidation.rejected, (state) => {
        state.error =
          "Något gick fel när validering av betalning hämtades. Försök igen senare.";
      })
      .addCase(getPaymentCaptureAsync.fulfilled, (state, action) => {
        if (action.payload) {
          console.log("CAPTURE SVARET: ", action.payload);
          state.paymentCapture = action.payload;
          state.error = null;
        }
      })
      .addCase(getPaymentCaptureAsync.rejected, (state) => {
        state.error = "Något gick fel när betalning bearbetades.";
      });
  },
});

export const { clearPaymentOrder, clearPaymentInfo } = paymentSlice.actions;
export const PaymentReducer = paymentSlice.reducer;
