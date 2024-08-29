import {
  PaymentAborted,
  PaymentCancelled,
  PaymentFailed,
  PaymentOrderResponse,
  Transaction,
  ValidPaymentOrder,
} from "../../swedbankTypes";
import { PaymentOrderIncoming, PaymentOrderOutgoing } from "../../types";

export async function PostPaymentOrder(paymentOrder: PaymentOrderOutgoing) {
  const uri = "/psp/paymentorders";
  const requestBody = {
    paymentOrder,
  };
  const bearer = import.meta.env.VITE_SWEDBANK_BEARER;

  // const sessionId = import.meta.env.VITE_SWEDBANK_SESSIONID;
  console.log(bearer);
  return fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;version=3.1",
      Authorization: `Bearer ${bearer}`,
      // "User-Agent": "swedbankpay-sdk-dotnet/3.0.1",
      // Accept: "application/problem+json; q=1.0, application/json; q=0.9",
      // "Session-Id": sessionId,
      // Forwarded: "for=192.168.1.157; host=https://localhost:5173; proto=https",
      Host: "api.externalintegration.payex.com",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Nätverksfel - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("RESPONSE PÅ PAYMENT ORDER: ", data);
      return data as PaymentOrderIncoming;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function GetPaymentPaidValidation(paidUrl: string) {
  const uri = paidUrl;
  const bearer = import.meta.env.VITE_SWEDBANK_BEARER;
  const expandedNodeUrl = uri.replace("paid", "?$expand=paid");
  // const sessionId = import.meta.env.VITE_SWEDBANK_SESSIONID;
  console.log(bearer);
  return fetch(expandedNodeUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;version=3.1",
      Authorization: `Bearer ${bearer}`,
      // "User-Agent": "swedbankpay-sdk-dotnet/3.0.1",
      // Accept: "application/problem+json; q=1.0, application/json; q=0.9",
      // "Session-Id": sessionId,
      // Forwarded: "for=192.168.1.157; host=https://localhost:5173; proto=https",
      Host: "api.externalintegration.payex.com",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Nätverksfel - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("FINNS DET AUTHORIZAED?????: ", data);
      return data as ValidPaymentOrder;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function GetPaymentFailedValidation(paidUrl: string) {
  const uri = paidUrl;
  const bearer = import.meta.env.VITE_SWEDBANK_BEARER;

  // const sessionId = import.meta.env.VITE_SWEDBANK_SESSIONID;
  console.log(bearer);
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;version=3.1",
      Authorization: `Bearer ${bearer}`,
      // "User-Agent": "swedbankpay-sdk-dotnet/3.0.1",
      // Accept: "application/problem+json; q=1.0, application/json; q=0.9",
      // "Session-Id": sessionId,
      // Forwarded: "for=192.168.1.157; host=https://localhost:5173; proto=https",
      Host: "api.externalintegration.payex.com",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Nätverksfel - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("DATA", data);
      return data as PaymentFailed;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function GetPaymentCancelledValidation(paidUrl: string) {
  const uri = paidUrl;
  const bearer = import.meta.env.VITE_SWEDBANK_BEARER;

  // const sessionId = import.meta.env.VITE_SWEDBANK_SESSIONID;
  console.log(bearer);
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;version=3.1",
      Authorization: `Bearer ${bearer}`,
      // "User-Agent": "swedbankpay-sdk-dotnet/3.0.1",
      // Accept: "application/problem+json; q=1.0, application/json; q=0.9",
      // "Session-Id": sessionId,
      // Forwarded: "for=192.168.1.157; host=https://localhost:5173; proto=https",
      Host: "api.externalintegration.payex.com",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Nätverksfel - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("DATA", data);
      return data as PaymentCancelled;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function GetPaymentAbortedValidation(paidUrl: string) {
  const uri = paidUrl;
  const bearer = import.meta.env.VITE_SWEDBANK_BEARER;

  // const sessionId = import.meta.env.VITE_SWEDBANK_SESSIONID;
  console.log(bearer);
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;version=3.1",
      Authorization: `Bearer ${bearer}`,
      // "User-Agent": "swedbankpay-sdk-dotnet/3.0.1",
      // Accept: "application/problem+json; q=1.0, application/json; q=0.9",
      // "Session-Id": sessionId,
      // Forwarded: "for=192.168.1.157; host=https://localhost:5173; proto=https",
      Host: "api.externalintegration.payex.com",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Nätverksfel - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("DATA", data);
      return data as PaymentAborted;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

//HAR JAG GJORT DEN TYPEN SOM SKICKAS OCH TAS EMOT FÖR 3.0 OCH INTE FÖR 3.1????
export async function CapturePayment({
  transaction,
  captureUrl,
}: {
  transaction: Transaction;
  captureUrl: string;
}): Promise<PaymentOrderResponse | null> {
  const uri = captureUrl;
  const requestBody = {
    transaction,
  };
  const bearer = import.meta.env.VITE_SWEDBANK_BEARER;

  const sessionId = import.meta.env.VITE_SWEDBANK_SESSIONID;
  return fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;version=3.1",
      Authorization: `Bearer ${bearer}`,
      // "User-Agent": "swedbankpay-sdk-dotnet/3.0.1",
      // Accept: "application/problem+json; q=1.0, application/json; q=0.9",
      "Session-Id": sessionId,
      Forwarded: "for=192.168.1.157; host=https://localhost:5173; proto=https",
      Host: "api.externalintegration.payex.com",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Nätverksfel - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data as PaymentOrderResponse;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
