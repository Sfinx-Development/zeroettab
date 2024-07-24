import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

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
    ></Box>
  );
}
