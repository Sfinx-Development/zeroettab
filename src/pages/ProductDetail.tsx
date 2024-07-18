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
import { useAppSelector } from "../slices/store";

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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
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
            alt="Tshirt"
            style={{
              height: "100%",
              width: "auto",
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
          sx={{ marginY: 4, fontSize: 32, fontWeight: 300, letterSpacing: 2 }}
        >
          {activeProduct?.name}
        </Typography>
        <Typography
          sx={{
            marginBottom: 6,
            fontSize: 18,
            fontWeight: 300,
            letterSpacing: 2,
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
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 300,
              letterSpacing: 2,
              color: "white",
            }}
          >
            Lägg i varukorg
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
