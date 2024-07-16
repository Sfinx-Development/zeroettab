import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { db } from "./config";
  import { Product } from "../slices/productSlice";
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

 