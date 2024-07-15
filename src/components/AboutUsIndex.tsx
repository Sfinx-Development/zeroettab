import { Box, Typography, Grid, IconButton } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export default function AboutUsIndex() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        height: "200vh", // Make the component tall to enable scrolling
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        background: "linear-gradient(135deg, #a295bd 0%, #6e578a 100%)",
        padding: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "200vh",
          zIndex: -1,
          background: "linear-gradient(135deg, #a295bd 0%, #6e578a 100%)",
        }}
      />
      <Box
        ref={logoRef}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        sx={{
          maxWidth: "800px",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            fontSize: 36,
            fontWeight: "bold",
            marginBottom: 2,
            letterSpacing: 1,
          }}
        >
          Vilka är vi?
        </Typography>
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            fontSize: 24,
            maxWidth: "600px",
            marginBottom: 4,
          }}
        >
          Vi är två fullstack-utvecklare som gärna hjälper ditt företag att
          komma igång!
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          padding: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          Kontaktuppgifter
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#6e578a",
                "&:hover": {
                  backgroundColor: "#5b4773",
                },
              }}
              href="mailto:info@example.com"
            >
              <MailOutlineIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginTop: 1, color: "white" }}>
              info@example.com
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#6e578a",
                "&:hover": {
                  backgroundColor: "#5b4773",
                },
              }}
              href="tel:+46700000000"
            >
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginTop: 1, color: "white" }}>
              +46 70 000 00 00
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
