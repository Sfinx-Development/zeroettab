import { PaymentOrderOutgoing } from "../../types";

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
      return data as PaymentOrderOutgoing;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
