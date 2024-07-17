import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { Product } from "../slices/productSlice";
import { db } from "./config";
export const addProductToDB = async (product: Product) => {
  try {
    const todoCollectionRef = collection(db, "products");

    const docRef = await addDoc(todoCollectionRef, {});

    product.id = docRef.id;

    await updateDoc(docRef, product as Partial<Product>);

    const todoDoc = await getDoc(docRef);
    if (todoDoc.exists()) {
      const todoData = todoDoc.data();
      return todoData as Product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error adding product: ", error);
    throw new Error("Failed to add product");
  }
};
export const getProductsFromDB = async () => {
  try {
    const todoCollectionRef = collection(db, "products");

    const q = query(todoCollectionRef);

    const querySnapshot = await getDocs(q);

    const products: Product[] = [];

    querySnapshot.forEach((doc) => {
      const todoData = doc.data();
      products.push(todoData as Product);
    });

    return products;
  } catch (error) {
    console.error("Error getting products: ", error);
    throw new Error("Failed to get products");
  }
};
