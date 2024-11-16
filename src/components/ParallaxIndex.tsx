import { Box, Link, Typography } from "@mui/material";
import BubblaComponent from "./BubblaComponent";
import { Rubrik } from "./Footer";

export default function ParallaxIndex() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #1a1a1d, #4e4e50)",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(34,32,37,0.95)",
          zIndex: 2,
          width: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "60%", lg: "45%", xl: "50%" },
            marginBottom: 4,
            paddingTop: { xs: 10, xl: 15 },
            paddingBottom: { xs: 2, xl: 4 },
            marginX: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
            borderRadius: 4,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
            padding: { xs: 3, lg: 6 },
          }}
        >
          <Rubrik
            sx={{
              color: "#FFD700",
              fontSize: { xs: 26, md: 34, xl: 42 },
              fontWeight: 700,
              letterSpacing: "0.5px",
              mb: 2,
              textAlign: "center",
            }}
          >
            Frontend, Backend eller Fullstack?
          </Rubrik>
          <Typography
            sx={{
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: { xs: 18, md: 22, xl: 26 },
              fontWeight: 300,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Hos oss behöver du inte välja. Men vad är det vi gör, egentligen?
            Kanske har du, likt många andra, lite halvbra koll på vad skillnaden
            är. Frontend, backend eller fullstack - vad är vad och vad behöver
            du?
          </Typography>
        </Box>

        <BubblaComponent />

        <Box
          sx={{
            width: { xs: "90%", md: "60%", lg: "45%", xl: "50%" },
            marginBottom: 10,
            marginX: "auto",
            paddingTop: { xs: 2, xl: 4 },
            paddingBottom: { xs: 2, xl: 4 },
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
            borderRadius: 4,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
            padding: { xs: 3, lg: 6 },
          }}
        >
          <Rubrik
            sx={{
              color: "#FFD700",
              fontSize: { xs: 26, md: 34, xl: 42 },
              fontWeight: 700,
              letterSpacing: "0.5px",
              mb: 2,
              textAlign: "center",
            }}
          >
            Kort sagt..
          </Rubrik>
          <Typography
            sx={{
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: { xs: 18, md: 22, xl: 26 },
              fontWeight: 300,
              lineHeight: 1.6,
              textAlign: "center",
              marginBottom: 3,
            }}
          >
            Oavsett vad du behöver hjälp med har vi lösningen. Våra tekniska
            lösningar är inte bara robusta. De är också anpassade för att växa
            med ditt företag och maximera ditt bolags digitala närvaro. Jobba
            ihop?
          </Typography>
          <Link
            sx={{
              textDecoration: "none",
              transition: "all 0.3s",
              background:
                "linear-gradient(135deg, rgba(250,220,197,1), rgba(235,190,180,1))",
              paddingY: 1.5,
              paddingX: 3,
              borderRadius: "30px",
              color: "#1a1a1d",
              fontWeight: "600",
              fontSize: { xs: 18, md: 20, xl: 24 },
              lineHeight: 1.5,
              display: "inline-block",
              "&:hover": {
                color: "#333",
                background:
                  "linear-gradient(135deg, rgba(235,190,180,1), rgba(250,220,197,1))",
                boxShadow: "0px 4px 15px rgba(250,220,197,0.6)",
              },
            }}
            href="/contact"
          >
            Kontakt
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
