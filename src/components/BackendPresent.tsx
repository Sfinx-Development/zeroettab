import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";

export default function BackendPresentation() {
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
        height: "1000px",
        fontSize: "24px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Box
        sx={{
          ackgroundImage: `url("https://i.imgur.com/kKyCoTP.png")`,
          minHeight: "500px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
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
          <FormattedMessage id="backend-solutions" />
        </Typography>
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 2,
            borderRadius: 1,
            fontSize: 30,
          }}
        >
          <FormattedMessage id="robust-and" />
        </Typography>
      </Box>
    </Box>
  );
}
