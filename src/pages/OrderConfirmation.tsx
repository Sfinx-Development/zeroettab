import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Order, updateOrderAsync } from "../slices/orderSlice";
import {
  clearPaymentOrder,
  getPaymentValidation,
} from "../slices/paymentSlice";
import { useAppDispatch, useAppSelector } from "../slices/store";

export default function OrderConfirmation() {
  const order = useAppSelector((state) => state.orderSlice.order);
  const products = useAppSelector((state) => state.productSlice.products);
  const incomingPaymentOrder = useAppSelector(
    (state) => state.paymentSlice.paymentOrderIncoming
  );
  const paymentInfo = useAppSelector((state) => state.paymentSlice.paymentInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (order && incomingPaymentOrder?.paid.id) {
      dispatch(getPaymentValidation(incomingPaymentOrder.paid.id)).then(
        (fulfilled) => {
          if (fulfilled) {
            const updatedOrder: Order = {
              ...order,
              status: "Paid",
            };
            dispatch(updateOrderAsync(updatedOrder));
          }
        }
      );
    }
  }, [incomingPaymentOrder]);

  useEffect(() => {
    if (paymentInfo && order) {
      const orderUpdatedPayment: Order = {
        ...order,
        paymentInfo: paymentInfo,
      };
      dispatch(updateOrderAsync(orderUpdatedPayment));
    }
    dispatch(clearPaymentOrder());
  }, [paymentInfo]);

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
      {order && order.status === "Paid" ? (
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
