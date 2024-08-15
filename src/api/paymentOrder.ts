import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { PaymentOrderIncoming } from "../../types";
import { db } from "./config";
export const addPaymentOrderIncomingToDB = async (
  paymentOrder: PaymentOrderIncoming
) => {
  try {
    const paymentOrderCollectionRef = collection(db, "paymentOrderIncoming");

    const docRef = await addDoc(paymentOrderCollectionRef, {});

    paymentOrder.id = docRef.id;

    await updateDoc(docRef, paymentOrder as Partial<PaymentOrderIncoming>);

    const paymentOrderDoc = await getDoc(docRef);
    if (paymentOrderDoc.exists()) {
      const orderData = paymentOrderDoc.data();
      return orderData as PaymentOrderIncoming;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error adding paymentOrderIncoming: ", error);
    throw new Error("Failed to add paymentOrderIncoming");
  }
};

export const getPaymentOrderFromDB = async (id: string) => {
  try {
    const paymentOrderCollectionRef = collection(db, "paymentOrderIncoming");

    const q = query(paymentOrderCollectionRef, where("id", "==", id));

    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    return docSnapshot.data() as PaymentOrderIncoming;
  } catch (error) {
    console.error("Error getting paymentOrderIncoming: ", error);
    throw new Error("Failed to get paymentOrderIncoming");
  }
};

