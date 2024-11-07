import { Box } from "@mui/material";
import AboutUsComponent from "../components/AboutUsComponent";
import ParallaxAboutUs from "../components/parallax/ParallaxAboutUs";

export default function AboutUs() {
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
      <AboutUsComponent />
      <ParallaxAboutUs />
    </Box>
  );
}
