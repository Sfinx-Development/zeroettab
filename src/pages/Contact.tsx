import { Box, keyframes } from "@mui/material";
import ContactComponent from "../components/ContactComponent";

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

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        // marginTop: 2,
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
      <ContactComponent />
    </Box>
  );
}
