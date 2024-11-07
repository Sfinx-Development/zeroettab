import { Box } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import IndexComponent from "../components/IndexComponent";
import ParallaxIndex from "../components/parallax/ParallaxIndex";

export default function Index() {
  const iconsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (iconsRef.current) {
        const top = iconsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
      }));
    }
  }, [isVisible, controls]);

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
      <IndexComponent />
      <ParallaxIndex />
    </Box>
  );
}
