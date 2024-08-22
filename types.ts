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

export interface PaymentOrderOutgoing {
  operation: string;
  currency: string;
  amount: number;
  vatAmount: number;
  description: string;
  userAgent: string;
  language: string;
  urls: {
    hostUrls: string[];
    paymentUrl: string;
    completeUrl: string;
    cancelUrl: string;
    callbackUrl: string;
    logoUrl: string;
  };
  payeeInfo: {
    payeeId: string;
    payeeReference: string;
    payeeName: string;
    orderReference: string;
  };
}

// interface ResourceReference {
//   id: string;
// }

interface Operation {
  method: string;
  href: string;
  rel: string;
  contentType: string;
}

// export interface PaymentOrderIncoming {
//   id: string;
//   created: string;
//   updated: string;
//   operation: string;
//   status: string;
//   currency: string;
//   amount: number;
//   vatAmount: number;
//   description: string;
//   initiatingSystemUserAgent: string;
//   language: string;
//   availableInstruments: string[];
//   implementation: string;
//   integration: string;
//   instrumentMode: boolean;
//   guestMode: boolean;
//   urls: ResourceReference;
//   payeeInfo: ResourceReference;
//   payer: ResourceReference;
//   history: ResourceReference;
//   failed: ResourceReference;
//   aborted: ResourceReference;
//   paid: ResourceReference;
//   cancelled: ResourceReference;
//   reversed: ResourceReference;
//   financialTransactions: ResourceReference;
//   failedAttempts: ResourceReference;
//   postPurchaseFailedAttempts: ResourceReference;
//   metadata: ResourceReference;
//   operations: Operation[];
// }

export interface PaymentOrderId {
  id: string;
}

// Typdefinition för paymentOrder
export interface PaymentOrder {
  id: string;
  amount: number;
  currency: string;
  description: string;
  created: string;
  updated: string;
  operation: string;
  status: string;
  payeeInfo: PaymentOrderId;
  payer: PaymentOrderId;
  urls: PaymentOrderId;
  aborted: PaymentOrderId;
  cancelled: PaymentOrderId;
  failed: PaymentOrderId;
  failedAttempts: PaymentOrderId;
  financialTransactions: PaymentOrderId;
  history: PaymentOrderId;
  metadata: PaymentOrderId;
  paid: PaymentOrderId;
  postPurchaseFailedAttempts: PaymentOrderId;
  reversed: PaymentOrderId;
  vatAmount: number;
  availableInstruments: string[];
  guestMode: boolean;
  implementation: string;
  initiatingSystemUserAgent: string;
  instrumentMode: boolean;
  integration: string;
  language: string;
}

// Typdefinition för incomingPaymentOrder
export interface PaymentOrderIncoming {
  id: string;
  operations: Operation[];
  paymentOrder: PaymentOrder;
}
