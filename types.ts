export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  in_store: boolean;
  amount: number;
  // subcategory_id: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  color: string;
  size: number; // eller string
  material: string;
  rabatt: number;
  launch_date: string; // String för slice
}

export interface Delivery {
  id: string;
  method: string; // tex Klarna
  cost: number; // leveranskostnad
  estimated_time: number; // hur många dagar?
}

export interface PaymentMethod {
  id: string;
  method: string;
}

export interface Payment {
  id: string;
  order_id: string;
  method_id: string;
  amount: number; // Vad som är betalt
  date: string; // String för slice
}

export interface Review {
  id: string;
  name: string;
  date: string;
  description: string;
  stars: number;
}

export interface Product_To_Review {
  product_id: string;
  review_id: string;
}

export interface Image {
  id: string;
  url: string;
  alt: string;
}

export interface Image_To_Product {
  product_id: string;
  image_id: string;
}

export interface User {
  id: string; // skapas vid betalning?
}

export interface Cart {
  id: string;
  user_id: string;
  created_date: string;
}

export interface CartItem {
  id: string;
  cart_id: string;
  product_id: string;
  quantity: number; // hur många av en produkt
  price: number;
}

export interface Order {
  id: string;
  user_id: string;
  total_amount: number;
  created_date: string;
  status: string; //om den är skickad , packad osv
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
}
