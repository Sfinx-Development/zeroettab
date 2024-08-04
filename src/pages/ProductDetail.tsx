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
import { addItem, setCart, updateItem } from "../slices/cartSlice";
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

  const sizesLeft = (product: Product) => {
    const sizeLeft = product.sizes.find((s) => s.label == size);
    return sizeLeft ? sizeLeft.amount : 0;
  };

  const handleAddToCart = (product: Product) => {
    if (cart && size && sizesLeft(product) > 0) {
      const itemExists = cart.items.find((i) => i.product_id == product.id);
      if (itemExists != null && itemExists.size == size) {
        const itemQuantity = itemExists.quantity + 1;
        const updatedItem = {
          ...itemExists,
          quantity: itemQuantity,
        };
        dispatch(updateItem(updatedItem));
      } else {
        const newItem = {
          id: new Date().toISOString(),
          cart_id: cart.id,
          product_id: product.id,
          quantity: 1,
          price: product.price,
          size: size,
        };
        dispatch(addItem(newItem));
      }
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
            size: size,
          },
        ],
      };
      dispatch(setCart(newCart));
    }
  };

  const allSizesOutOfStock = activeProduct?.sizes.every((s) => s.amount === 0);

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
            src={activeProduct?.imageUrl}
            alt={activeProduct?.name}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              minWidth: "330px",
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
            {activeProduct?.sizes
              .filter((s) => s.amount > 0)
              .map((s) => (
                <MenuItem key={s.label} value={s.label}>
                  {s.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {activeProduct && (
          <Button
            sx={{
              backgroundColor: "black",
              marginY: 4,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#3c52b2",
              },
            }}
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
              {allSizesOutOfStock ? "Slut i lager" : "Lägg i varukorg"}
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
}
