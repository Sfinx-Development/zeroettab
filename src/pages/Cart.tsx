import { keyframes } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { updateItem } from "../slices/cartSlice";
import { addOrderAsync, Order, OrderItem } from "../slices/orderSlice";
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
  const navigate = useNavigate();

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

  const handleMakeOrder = () => {
    const orderItems = cart?.items.map((item) => {
      const orderItem: OrderItem = {
        id: uuidv4(),
        order_id: uuidv4(),
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      };
      return orderItem;
    });
    if (orderItems) {
      const totalPrice =
        orderItems?.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ) || 0;
      const newOrder: Order = {
        id: uuidv4(),
        user_id: "123",
        items: orderItems,
        total_amount: totalPrice,
        created_date: new Date().toISOString(),
        status: "Waiting for payment",
      };

      dispatch(addOrderAsync(newOrder));
      navigate("/orderconfirmation");
    }
  };

  const calculateTotalPrice = () => {
    return cart?.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        padding: 0,
        margin: 0,
        width: "100%",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
        backgroundColor: "white",
      }}
    >
      {!cart ||
        (cart.items.length === 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingY: 2,
              width: "100%",
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 80, color: "#aaa", mb: 2 }} />
            <Typography
              sx={{ letterSpacing: 2, fontSize: 26, mb: 2, color: "#333" }}
            >
              Varukorgen är tom
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#777", mb: 4 }}>
              Det ser ut som att du inte har lagt till några produkter i din
              varukorg än.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/products")}
              sx={{
                padding: "10px 20px",
                fontSize: 16,
                textTransform: "none",
                borderRadius: 2,
                backgroundColor: "black",
              }}
            >
              <Typography>Fortsätt handla</Typography>
            </Button>
          </Box>
        ))}
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
                {product && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 1,
                    }}
                  >
                    {" "}
                    <IconButton onClick={() => handleAddToCart(product)}>
                      <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => handleRemoveFromCart(product)}>
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                )}
                <Typography>{item.quantity} ST</Typography>
                <Typography>Pris: {product?.price} SEK</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      {cart && cart?.items.length > 0 && (
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
            <Typography variant="h6">I varukorgen</Typography>
            <Typography>Summa: {calculateTotalPrice()} SEK</Typography>
            <Typography>Frakt: 0 SEK</Typography>
            <Typography sx={{ fontWeight: 500 }}>
              Totalt: {calculateTotalPrice()}
            </Typography>
          </Box>
          <Box sx={{ width: "90%" }}>
            <Button
              fullWidth
              disabled={!cart || cart?.items.length == 0}
              onClick={() => handleMakeOrder()}
              sx={{ padding: 2, backgroundColor: "black", color: "white" }}
            >
              <Typography sx={{ color: "white" }}>Betalning</Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
