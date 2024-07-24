import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import { useAppSelector } from "./store";

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

export default function Cart() {
  const cart = useAppSelector((state) => state.cartSlice.cart);
  const products = useAppSelector((state) => state.productSlice.products);
  function getProduct(productId: string) {
    return products.find((p) => p.id == productId);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        // flexGrow: 1,
        backgroundColor: "black",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      {cart?.items.map((item) => {
        const product = getProduct(item.product_id);
        return (
          <Box key={item.id}>
            <img src={product?.imageUrl} alt={`Product ${item.product_id}`} />
          </Box>
        );
      })}
    </Box>
  );
}
