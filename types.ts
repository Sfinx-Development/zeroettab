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
