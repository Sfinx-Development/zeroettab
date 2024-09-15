import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { CaptureResponse } from "../../swedbankTypes";
import { db } from "./config";

export const getCaptureFromDb = async (paymentOrderId: string) => {
  try {
    const callbackCollectionRef = collection(db, "captureResponses");

    //kanske where transactionresponse .id ?
    const q = query(
      callbackCollectionRef,
      where("paymentOrder.id", "==", paymentOrderId)
    );

    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    return docSnapshot.data() as CaptureResponse;
  } catch (error) {
    console.error("Error getting capture: ", error);
    throw new Error("Failed to get capture from firebase");
  }
};

export const addCaptureToDB = async (capture: CaptureResponse) => {
  try {
    const captureResponseCollectionRef = collection(db, "captureResponses");

    const docRef = await addDoc(captureResponseCollectionRef, {});

    capture.capture.id = docRef.id;

    await updateDoc(docRef, capture as Partial<CaptureResponse>);

    const captureDoc = await getDoc(docRef);
    if (captureDoc.exists()) {
      const captureData = captureDoc.data();
      return captureData as CaptureResponse;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error adding capture: ", error);
    throw new Error("Failed to add capture");
  }
};
