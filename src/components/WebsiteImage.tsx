import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";

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
          fontSize: "1.5rem",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 2,
            borderRadius: 1,
            fontSize: 30,
          }}
        >
          <FormattedMessage id="zeroett-offers" />
        </Typography>
      </Box>
    </Box>
  );
}
