import { Box, Button } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function WebsiteImage() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, [controls]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        minHeight: 400,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url("https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          minHeight: "500px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          width: "100%",
          fontSize: "1.5rem",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Button
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: 2,
            borderRadius: 1,
            fontSize: 30,
            color: "white",
          }}
        >
          Till erbjudanden för hemsida
        </Button>
      </Box>
    </Box>
  );
}
