import { Box } from "@mui/material";
import ContactComponent from "../components/ContactComponent";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
        minHeight: "100vh",
      }}
    >
      <ContactComponent />
    </Box>
  );
}
