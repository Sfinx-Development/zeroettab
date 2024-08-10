import { PaymentOrder } from "../../types";

export function PostPaymentOrder(paymentOrder: PaymentOrder) {
  const uri = "http://api.externalintegration.payex.com/psp/paymentorders";
  const requestBody = {
    paymentOrder,
  };
  const bearer = import.meta.env;

  return fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; version=3.x/2.0; charset=utf-8",
      Authorization: `Bearer ${bearer}`,
      Host: "api.externalintegration.payex.com",
      UserAgent: "swedbankpay-sdk-dotnet/3.0.1",
      Accept: "application/problem+json; q=1.0,application/json; q=0.9",
      "Session-Id": "",
      Forwarded: "for=10.0.0.17; host=example.com; proto=https",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      console.log("response:", JSON.stringify(response));
      if (!response.ok) {
        throw new Error(`Nätverksfel - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data as PaymentOrder;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
