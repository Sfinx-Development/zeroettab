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
