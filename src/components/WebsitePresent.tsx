import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

export default function WebsitePresentation() {
  const AnimatedBox = ({ children }) => {
    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: false,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #a295bd 0%, #6e578a 100%)",
        padding: 4,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url("https://i.imgur.com/kKyCoTP.png")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
          filter: "brightness(0.5)",
        }}
      />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            zIndex: 2,
            textAlign: "left",
            color: "white",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "white",
              }}
            >
              <FormattedMessage id="offers-webpages" />
            </Typography>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                fontSize: { xs: 18, md: 20 },
                marginBottom: 4,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography sx={{ color: "white" }}>
                Byggs från grunden
              </Typography>
              <Typography sx={{ color: "white" }}>Skräddarsytt</Typography>
              <Typography sx={{ color: "white" }}>SEO</Typography>
              <Typography sx={{ color: "white" }}>DESIGN</Typography>
              <Typography sx={{ color: "white" }}>UNDERHÅLLNING</Typography>
            </Box>
          </AnimatedBox>
          <Button
            sx={{
              backgroundColor: "rgba(30, 30, 30, 0.8)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(50, 50, 50, 0.8)",
              },
            }}
            variant="contained"
          >
            Läs mer
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            zIndex: 2,
            textAlign: "left",
            color: "white",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "white",
              }}
            >
              <FormattedMessage id="mobile-applications" />
            </Typography>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                fontSize: { xs: 18, md: 20 },
                marginBottom: 4,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography sx={{ color: "white" }}>
                Byggs från grunden
              </Typography>
              <Typography sx={{ color: "white" }}>Skräddarsytt</Typography>
              <Typography sx={{ color: "white" }}>IOS och Android</Typography>
              <Typography sx={{ color: "white" }}>DESIGN</Typography>
              <Typography sx={{ color: "white" }}>UNDERHÅLLNING</Typography>
            </Box>
          </AnimatedBox>
          <Button
            sx={{
              backgroundColor: "rgba(30, 30, 30, 0.8)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(50, 50, 50, 0.8)",
              },
            }}
            variant="contained"
          >
            Läs mer
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            padding: 4,
            zIndex: 2,
            textAlign: "left",
            color: "white",
          }}
        >
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 40 },
                marginBottom: 2,
                letterSpacing: 2,
                color: "white",
              }}
            >
              <FormattedMessage id="backend-solutions" />
            </Typography>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                fontSize: { xs: 18, md: 20 },
                marginBottom: 4,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography sx={{ color: "white" }}>
                Byggs från grunden
              </Typography>
              <Typography sx={{ color: "white" }}>Skräddarsytt</Typography>
              <Typography sx={{ color: "white" }}>
                Anpassade lösningar
              </Typography>
              <Typography sx={{ color: "white" }}>DESIGN</Typography>
              <Typography sx={{ color: "white" }}>UNDERHÅLLNING</Typography>
            </Box>
          </AnimatedBox>
          <Button
            sx={{
              backgroundColor: "rgba(30, 30, 30, 0.8)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(50, 50, 50, 0.8)",
              },
            }}
            variant="contained"
          >
            Läs mer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
