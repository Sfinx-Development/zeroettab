import { keyframes } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { updateItem } from "../slices/cartSlice";
import { Product } from "../slices/productSlice";
import { useAppDispatch, useAppSelector } from "../slices/store";

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
  const dispatch = useAppDispatch();

  function getProduct(productId: string) {
    return products.find((p) => p.id === productId);
  }

  const handleAddToCart = (product: Product) => {
    if (cart) {
      const itemExists = cart.items.find((i) => i.product_id == product.id);
      console.log("ITEM : ", itemExists);
      if (itemExists != null && itemExists.quantity < product.amount) {
        const itemQuantity = itemExists.quantity + 1;
        const updatedItem = {
          ...itemExists,
          quantity: itemQuantity,
        };
        dispatch(updateItem(updatedItem));
      }
    }
  };

  const handleRemoveFromCart = (product: Product) => {
    if (cart) {
      const itemExists = cart.items.find((i) => i.product_id == product.id);
      console.log("ITEM : ", itemExists);
      if (itemExists != null && itemExists.quantity > 0) {
        const itemQuantity = itemExists.quantity - 1;
        const updatedItem = {
          ...itemExists,
          quantity: itemQuantity,
        };
        dispatch(updateItem(updatedItem));
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: 0,
        margin: 0,
        width: "100%",
        backgroundColor: "white",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: 1,
          width: { xs: "100%", md: "70%" },
          alignItems: "center",
          maxHeight: { xs: "auto", md: "600px" },
          overflowY: "auto",
          marginBottom: 2,
        }}
      >
        {cart?.items.map((item) => {
          const product = getProduct(item.product_id);
          return (
            <Box
              key={item.id}
              sx={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                padding: 2,
                width: "90%",
                alignItems: "center",
                marginBottom: 2,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: 2,
              }}
            >
              <img
                src={product?.imageUrl}
                alt={`Product ${item.product_id}`}
                style={{ height: 100, width: 80, objectFit: "cover" }}
              />
              <Box
                sx={{
                  paddingX: { xs: 2, sm: 4 },
                  width: { xs: "100%", sm: "auto" },
                  textAlign: { xs: "center", sm: "left" },
                  marginBottom: { xs: 1, sm: 0 },
                }}
              >
                <Typography sx={{ fontSize: 20, marginY: 1 }}>
                  {product?.name}
                </Typography>
                <Typography>Storlek: {product?.size}</Typography>
                <Typography>Färg: {product?.color}</Typography>
              </Box>
              <Box
                sx={{
                  paddingX: { xs: 2, sm: 4 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: { sm: "150px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 1,
                  }}
                >
                  <IconButton onClick={() => handleAddToCart(product)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => handleRemoveFromCart(product)}>
                    <RemoveIcon />
                  </IconButton>
                </Box>
                <Typography>{item.quantity} ST</Typography>
                <Typography>Pris: {product?.price} SEK</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: 2,
          // paddingX: { xs: 2, md: 4 },
          width: { xs: "100%", md: "30%" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            marginBottom: 2,
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Ordersummering</Typography>
          <Typography>Summa: 100 SEK</Typography>
          <Typography>Frakt: 49 SEK</Typography>
          <Typography sx={{ fontWeight: 500 }}>Totalt: 149 SEK</Typography>
        </Box>
        <Box sx={{ width: "90%" }}>
          <Button
            fullWidth
            sx={{ padding: 2, backgroundColor: "black", color: "white" }}
          >
            Betalning
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
