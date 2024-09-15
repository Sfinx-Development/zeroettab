import { collection, getDocs, query, where } from "firebase/firestore";
import {
  CaptureResponse,
  OutgoingTransaction,
  OutgoingTransactionNoUrl,
} from "../../swedbankTypes";
import { PaymentOrderIncoming } from "../../types";
import { addCaptureToDB } from "./capture";
import { db } from "./config";

//ÄNDRA TYPEN N
export const getPaymentDetailsFromDb = async (paymentOrderId: string) => {
  try {
    const paymentDetailsCollectionRef = collection(db, "paymentDetails");

    const q = query(
      paymentDetailsCollectionRef,
      where("paymentOrderId", "==", paymentOrderId)
    );

    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    return docSnapshot.data().paymentOrder as PaymentOrderIncoming;
  } catch (error) {
    console.error("Error getting paymentOrderIncoming: ", error);
    throw new Error("Failed to get paymentOrderIncoming");
  }
};

export async function PostCaptureToInternalApiDB({
  transaction,
}: {
  transaction: OutgoingTransaction;
}) {
  const baseUrl =
    "https://swedbankpay-gad0dfg6fha9bpfh.swedencentral-01.azurewebsites.net/swedbankpay/capture";
  const captureUrl = transaction.transaction.captureUrl;
  const fullUrl = `${baseUrl}?captureUrl=${encodeURIComponent(captureUrl)}`; // Encoda URL:n för säkerhetsskull

  const transactionNoUrl: OutgoingTransactionNoUrl = {
    description: transaction.transaction.description,
    amount: transaction.transaction.amount,
    vatAmount: transaction.transaction.vatAmount,
    payeeReference: transaction.transaction.payeeReference,
  };

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;version=3.1",
        // Lägg till Authorization-header om behövs
        // "Authorization": `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(transactionNoUrl),
    });

    console.log("Response Status: ", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Nätverksfel - ${response.status}: ${errorText}`);
    }

    const data = (await response.json()) as CaptureResponse;
    console.log("Response Data: ", data);
    const savedData = await addCaptureToDB(data);
    return savedData;
  } catch (error) {
    console.error("Error in CapturePayment: ", error);
    return null;
  }
}
