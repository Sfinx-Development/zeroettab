import { keyframes } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { addItem, setCart } from "../slices/cartSlice";
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

export default function ProductDetail() {
  const activeProduct = useAppSelector(
    (state) => state.productSlice.activeProduct
  );
  const [size, setSize] = useState("");
  const cart = useAppSelector((state) => state.cartSlice.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product) => {
    if (cart) {
      const newItem = {
        id: new Date().toISOString(),
        cart_id: cart.id,
        product_id: product.id,
        quantity: 1,
        price: product.price,
      };
      dispatch(addItem(newItem));
    } else {
      const newCart = {
        id: new Date().toISOString(),
        created_date: new Date().toISOString(),
        items: [
          {
            id: new Date().toISOString(),
            cart_id: new Date().toISOString(),
            product_id: product.id,
            quantity: 1,
            price: product.price,
          },
        ],
      };
      dispatch(setCart(newCart));
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
        // alignItems: "center",
        flexGrow: 1,
        backgroundColor: "white",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
        color: "black",
      }}
    >
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: 2,
          }}
        >
          <img
            src={"https://i.imgur.com/sbMjvxp.png"}
            alt={activeProduct?.name}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              borderRadius: 8,
              //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          //   backgroundColor: "purple",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            marginTop: { xs: 0, md: 4 },
            fontSize: 32,
            fontWeight: 300,
            letterSpacing: 2,
          }}
        >
          {activeProduct?.name}
        </Typography>
        <Typography
          sx={{
            marginBottom: 4,
            fontSize: 32,
            fontWeight: 300,
            letterSpacing: 2,
          }}
        >
          {activeProduct?.price} SEK
        </Typography>
        <Typography
          sx={{
            marginBottom: 6,
            fontSize: 18,
            fontWeight: 300,
            letterSpacing: 2,
            marginX: 2,
          }}
        >
          {activeProduct?.description}
        </Typography>
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">Storlek</InputLabel>
          <Select
            sx={{ backgroundColor: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Age"
            onChange={(event) => setSize(event?.target.value)}
          >
            <MenuItem value={"S"}>S</MenuItem>
            <MenuItem value={"M"}>M</MenuItem>
            <MenuItem value={"L"}>L</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            backgroundColor: "black",
            marginY: 4,
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "#3c52b2",
            },
          }}
          disabled={activeProduct?.amount == 0}
          onClick={() => handleAddToCart(activeProduct)}
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 300,
              letterSpacing: 2,
              color: "white",
            }}
          >
            {activeProduct?.amount == 0 ? "Slut i lager" : "Lägg i varukorg"}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
