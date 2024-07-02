import { Box, Link, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useScreenSize } from "../contexts/screenSizeContext";

export default function ZeroettPresentation() {
  const { isMobile } = useScreenSize();
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
      <motion.div
        ref={logoRef}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={controls}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: 2,
          padding: { xs: 0, md: 4 },
          margin: "auto",
          zIndex: 2,
        }}
      >
        <Box
          sx={{ flex: 1, padding: 2, textAlign: { xs: "center", md: "left" } }}
        >
          <Box
            sx={{
              paddingY: 2,
              paddingX: { xs: 0, md: 0 },
              marginX: { xs: 0, md: 1 },
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              width: isMobile ? "100%" : "auto",
              marginLeft: isMobile ? 0 : 10,
            }}
          >
            <Link href="/" sx={{ textDecoration: "none" }}>
              <img
                src={
                  isMobile
                    ? "https://i.imgur.com/IMSL19B.png"
                    : "https://i.imgur.com/5Fk6tu4.png"
                }
                alt="Zeroett"
                width={isMobile ? 100 : 600}
                style={{ marginBottom: isMobile ? 16 : 0 }}
              />
            </Link>
          </Box>
          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              marginLeft: 3,
              lineHeight: 1.8,
              color: "white",
              fontWeight: "300",
            }}
          >
            <FormattedMessage id="zeroett-offers" />
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
