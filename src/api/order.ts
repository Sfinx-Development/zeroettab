import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Order } from "../slices/orderSlice";
import { db } from "./config";
export const addOrderToDB = async (order: Order) => {
  try {
    const orderCollectionRef = collection(db, "orders");

    const docRef = await addDoc(orderCollectionRef, {});

    order.id = docRef.id;

    await updateDoc(docRef, order as Partial<Order>);

    const orderDoc = await getDoc(docRef);
    if (orderDoc.exists()) {
      const orderData = orderDoc.data();
      return orderData as Order;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error adding product: ", error);
    throw new Error("Failed to add product");
  }
};
//   export const getProductsFromDB = async () => {
//     try {
//       const todoCollectionRef = collection(db, "products");

//       const q = query(todoCollectionRef);

//       const querySnapshot = await getDocs(q);

//       const products: Product[] = [];

//       querySnapshot.forEach((doc) => {
//         const todoData = doc.data();
//         products.push(todoData as Product);
//       });

//       return products;
//     } catch (error) {
//       console.error("Error getting products: ", error);
//       throw new Error("Failed to get products");
//     }
//   };

export const getOrderFromDB = async (userid: string) => {
  try {
    const orderCollectionRef = collection(db, "orders");

    const q = query(orderCollectionRef, where("user_id", "==", userid));

    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    return docSnapshot.data() as Order;
  } catch (error) {
    console.error("Error getting order: ", error);
    throw new Error("Failed to get order");
  }
};
