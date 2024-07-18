import { keyframes } from "@emotion/react";
import { Box, Typography } from "@mui/material";
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "black",
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
        color: "white",
      }}
    >
      <Typography>{activeProduct?.name}</Typography>
    </Box>
  );
}
