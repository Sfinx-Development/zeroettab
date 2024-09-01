import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";
import {
  OrderItemType,
  OutgoingTransaction,
  TransationOrderItem,
} from "../../swedbankTypes";
import { clearCart } from "../slices/cartSlice";
import { clearOrder, Order, updateOrderAsync } from "../slices/orderSlice";
import {
  clearPaymentInfo,
  clearPaymentOrder,
  getPaymentByIdAsync,
  getPaymentCaptureAsync,
  getPaymentPaidValidation,
} from "../slices/paymentSlice";
import { useAppDispatch, useAppSelector } from "../slices/store";

export default function OrderConfirmation() {
  const order = useAppSelector((state) => state.orderSlice.order);
  const products = useAppSelector((state) => state.productSlice.products);
  const incomingPaymentOrder = useAppSelector(
    (state) => state.paymentSlice.paymentOrderIncoming
  );
  const paymentInfo = useAppSelector((state) => state.paymentSlice.paymentInfo);
  // const paymentFailed = useAppSelector(
  //   (state) => state.paymentSlice.paymentFailed
  // );
  // const paymentCancelled = useAppSelector(
  //   (state) => state.paymentSlice.paymentCancelled
  // );
  // const paymentAborted = useAppSelector(
  //   (state) => state.paymentSlice.paymentAborted
  // );
  // const [paymentError, setPaymentError] = useState(false);
  const dispatch = useAppDispatch();
  const hasNavigatedAway = useRef(false);

  useEffect(() => {
    if (incomingPaymentOrder) {
      dispatch(getPaymentPaidValidation(incomingPaymentOrder));
    }
  }, []);

  useEffect(() => {
    console.log("ORDER: ", order);
    console.log("PAYMENT INFO: ", paymentInfo);

    if (paymentInfo && order) {
      console.log("DISPATCHING updateOrderAsync");
      const orderUpdatedPayment: Order = {
        ...order,
        status: "Paid",
        paymentInfo: paymentInfo.paymentOrder.paid,
      };
      dispatch(updateOrderAsync(orderUpdatedPayment));
    } else {
      console.log("Order eller PaymentInfo saknas");
    }
  }, [paymentInfo]);

  // useEffect(() => {
  //   if (!hasNavigatedAway.current) {
  //     return;
  //   }
  //   dispatch(clearPaymentOrder());
  //   dispatch(clearCart());
  //   dispatch(clearPaymentInfo());
  //   dispatch(clearOrder());
  // }, [dispatch]);

  useEffect(() => {
    console.log(
      "sista PAYMENTINFO: ",
      paymentInfo,
      "ORDER : ",
      order,
      "incomingpaymentoder: ",
      incomingPaymentOrder
    );
    if (paymentInfo && order && incomingPaymentOrder) {
      //swedbank har inte fått paymentinfo på prdern, det msåte ske separat för både swish o kort över här i useeffect
      //SEDAN när paymentinfo och creeditcard DÅ köra en capture?!
      dispatch(
        getPaymentByIdAsync({ url: incomingPaymentOrder.paymentOrder.id })
      );
      if (
        paymentInfo.paymentOrder.paid.instrument === "CreditCard" &&
        order.paymentInfo
      ) {
        console.log("PAYMENTINFO PÅ ORDER: ", order.paymentInfo);
        console.log("INCOMING: ", incomingPaymentOrder);
        console.log("PAYMENTINFO: ", paymentInfo);
        const mappedItems: TransationOrderItem[] = order.items.map((item) => {
          const product = products.find((p) => p.id === item.product_id);

          if (!product) {
            throw new Error(`Product with id ${item.product_id} not found`);
          }

          return {
            reference: product.id,
            name: product.name,
            type: OrderItemType.OTHER, //kategori
            class: "Hoodie", // kategori med?
            // imageUrl: item.imageUrl,
            description: product.description,
            // discountDescription: item.discountDescription,
            quantity: item.quantity,
            quantityUnit: "pcs",
            unitPrice: product.price * 100,
            discountPrice: product.rabatt,
            vatPercent: 1200,
            amount: item.quantity * product.price * 100,
            vatAmount: paymentInfo.paymentOrder.vatAmount,
          };
        });
        const outgoingTransaction: OutgoingTransaction = {
          transaction: {
            description: "Test Purchase",
            amount: paymentInfo.paymentOrder.amount,
            vatAmount: 0,
            payeeReference: order.paymentInfo?.payeeReference,
          },
          orderItems: mappedItems,
        };
        const operation = paymentInfo.operations.find(
          (o) => o.rel === "capture"
        );
        if (operation) {
          const captureUrl = operation.href;
          dispatch(
            getPaymentCaptureAsync({
              transaction: outgoingTransaction,
              url: captureUrl,
            })
          );
        }
      }
    }
    // else {
    //   // if (incomingPaymentOrder) {
    //   //   dispatch(getPaymentPaidValidation(incomingPaymentOrder));
    //   // }
    // }
    // dispatch(clearOrder());
  }, [order?.paymentInfo, paymentInfo]);

  // useEffect(() => {
  //   if (paymentAborted || paymentCancelled || (paymentFailed && order)) {
  //     setPaymentError(true);
  //     dispatch(clearPaymentOrder());
  //   }
  // }, [paymentInfo]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      hasNavigatedAway.current = true;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (hasNavigatedAway.current) {
        dispatch(clearPaymentOrder());
        dispatch(clearCart());
        dispatch(clearPaymentInfo());
        dispatch(clearOrder());
      }
    };
  }, [dispatch]);

  function getProduct(productId: string) {
    return products.find((p) => p.id === productId);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        flexGrow: 1,
        backgroundColor: "white",
        minHeight: "100vh",
        zIndex: 1,
        animation: "fadeIn 1s ease-out",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {paymentError && paymentAborted && (
        <Typography>Betalning {paymentAborted.abortReason}</Typography>
      )}
      {paymentError && paymentCancelled && (
        <Typography>Betalning {paymentCancelled.cancelReason}</Typography>
      )}
      {paymentError && paymentFailed && (
        <Typography>Betalning {paymentFailed.problem.detail}</Typography>
      )} */}
      {order && order.paymentInfo && order.status === "Paid" ? (
        <>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              marginBottom: 4,
              backgroundColor: "white",
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Orderbekräftelse - BETALD {order.status}
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Tack för din beställning! Här är en sammanfattning av din order:
            </Typography>
          </Paper>

          {order.items.map((item) => {
            const product = getProduct(item.product_id);
            return (
              <Paper
                key={item.id}
                elevation={1}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  padding: 2,
                  alignItems: "center",
                  marginBottom: 2,
                  backgroundColor: "white",
                  borderRadius: 2,
                }}
              >
                <img
                  src={product?.imageUrl}
                  alt={`Product ${item.product_id}`}
                  style={{
                    height: 80,
                    width: 60,
                    objectFit: "cover",
                    borderRadius: 4,
                    marginRight: 2,
                  }}
                />
                <Box
                  sx={{
                    flexGrow: 1,
                    paddingX: { xs: 2, sm: 4 },
                    textAlign: { xs: "center", sm: "left" },
                    marginBottom: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography variant="h6" sx={{ marginY: 1 }}>
                    {product?.name}
                  </Typography>
                  <Typography variant="body2">
                    Färg: {product?.color}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", sm: "flex-end" },
                    justifyContent: "space-between",
                    textAlign: "right",
                  }}
                >
                  <Typography>{item.quantity} ST</Typography>
                  <Typography>Pris: {product?.price} SEK</Typography>
                </Box>
              </Paper>
            );
          })}

          <Paper
            elevation={3}
            sx={{
              padding: 3,
              marginTop: 3,
              backgroundColor: "white",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              Order Summering
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Typography variant="body1">
              Totalt antal produkter:{" "}
              {order.items.reduce((acc, item) => acc + item.quantity, 0)}
            </Typography>
            <Typography variant="body1">
              Totalt pris: {order.total_amount} SEK
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert("Tack för din beställning!")}
              >
                Tillbaka till hem
              </Button>
            </Box>
          </Paper>
        </>
      ) : (
        <Box sx={{ textAlign: "center", padding: 4 }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Bearbetar betalning...
          </Typography>
        </Box>
      )}
    </Box>
  );
}
