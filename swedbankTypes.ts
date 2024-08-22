export interface PaymentOrder {
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
//TYPER FÖR STATUSAR PÅ BETALNING, ABORTED, CANCELLED, FAILED:

//ABORTED
export interface PaymentAborted {
  id: string;
  abortReason: string;
}

//CANCELLED
export interface CancelledPaymentToken {
  type: string;
  token: string;
  name: string;
  expiryDate: string;
}

export interface CancelledPaymentDetails {
  nonPaymentToken: string;
  externalNonPaymentToken: string;
}

export interface PaymentCancelled {
  id: string;
  cancelReason: string;
  instrument: string;
  number: number;
  payeeReference: string;
  orderReference: string;
  transactionType: string;
  amount: number;
  submittedAmount: number;
  feeAmount: number;
  discountAmount: number;
  tokens: CancelledPaymentToken[];
  details: CancelledPaymentDetails;
}

//FAILED
export interface FailedPaymentProblemDetails {
  name: string;
  description: string;
}
export interface FailedPaymentProblem {
  type: string;
  title: string;
  status: number;
  detail: string;
  problems: FailedPaymentProblemDetails[];
}
export interface PaymentFailed {
  id: string;
  problem: FailedPaymentProblem;
}

// export interface TransationOrderItem {
//   reference: string;
//   name: string;
//   type: string;
//   class: string;
//   itemUrl?: string;
//   imageUrl?: string;
//   description: string;
//   discountDescription?: string;
//   quantity: number;
//   quantityUnit: string;
//   unitPrice: number;
//   discountPrice?: number;
//   vatPercent: number;
//   amount: number;
//   vatAmount: number;
// }

//CAPTURE:

export interface Transaction {
  description: string;
  amount: number;
  vatAmount: number;
  payeeReference: string;
  receiptReference: string;
  // orderItems: TransationOrderItem[];
}

export interface PaymentOrderResponse {
  paymentOrder: {
    id: string;
    created: string;
    updated: string;
    operation: string;
    status: string;
    currency: string;
    amount: number;
    vatAmount: number;
    remainingCaptureAmount?: number; // Optional om det bara finns efter en delcapture
    remainingCancellationAmount?: number; // Optional om det bara finns efter en delcapture
    remainingReversalAmount: number;
    description: string;
    initiatingSystemUserAgent: string;
    language: string;
    availableInstruments: string[];
    implementation: string;
    integration: string;
    instrumentMode: boolean;
    guestMode: boolean;
    orderItems: {
      id: string;
    };
    urls: {
      id: string;
    };
    payeeInfo: {
      id: string;
    };
    payer: {
      id: string;
    };
    history: {
      id: string;
    };
    failed: {
      id: string;
    };
    aborted: {
      id: string;
    };
    paid: {
      id: string;
    };
    cancelled: {
      id: string;
    };
    financialTransactions: {
      id: string;
    };
    failedAttempts: {
      id: string;
    };
    postPurchaseFailedAttempts: {
      id: string;
    };
    metadata: {
      id: string;
    };
  };
  operations: Operation[];
}

export interface Operation {
  href: string;
  rel: string;
  method: string;
  contentType: string;
}

// export interface PaymentTransaction {
//   // id: string;
//   // created: string; // ISO 8601 date string
//   // updated: string;
//   // type: string;
//   // state: string;
//   amount: number;
//   vatAmount: number;
//   description: string;
//   payeeReference: string;
//   receiptReference: string;
// }

// export interface Capture {
//   id: string;
//   transaction: PaymentTransaction;
// }

// export interface PaymentCapture {
//   payment: string;
//   capture: Capture;
// }
