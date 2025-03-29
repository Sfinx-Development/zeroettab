import { Box } from "@mui/material";
import NewsComponent from "../components/NewsComponent";
import ParallaxNews from "../components/parallax/ParallaxNews";

export default function News() {
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
      <NewsComponent />
      <ParallaxNews />
    </Box>
  );
}
