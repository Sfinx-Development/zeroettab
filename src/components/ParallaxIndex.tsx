import { Box, Link, Typography } from "@mui/material";
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
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(34,32,37,255)",
          zIndex: 2,
        }}
      >
        <Box
          sx={{ width: "50%", marginBottom: 4, paddingTop: 20, marginLeft: 10 }}
        >
          <Rubrik sx={{ color: "#F7F7F7", fontSize: 30, fontWeight: 400 }}>
            Frontend, backend eller fullstack?
          </Rubrik>
          <Typography
            sx={{
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: 25,
              fontFamily: "Roboto",
              fontWeight: 200,
            }}
          >
            Hos oss behöver du inte välja. Men vad är det vi gör, egentligen?
            Kanske har du, likt många andra, lite halvbra koll på vad skillnaden
            är. Frontend, backend eller fullstack - vad är vad och vad behöver
            du?
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: 4,
          }}
        >
          <Rubrik
            sx={{
              backgroundColor: "#F7F7F7",
              padding: 3,
              color: "rgba(218,154,145,255)",
            }}
          >
            Frontend
          </Rubrik>
          <Rubrik
            sx={{
              backgroundColor: "rgba(254,232,209,255)",
              padding: 3,
              color: "rgba(225,161,99,255)",
            }}
          >
            Backend
          </Rubrik>
          <Rubrik
            sx={{
              background:
                "linear-gradient(to bottom, rgba(229,186,179,255),rgba(240,231,226,255))",
              padding: 3,
              color: "rgba(34,32,37,255)",
            }}
          >
            Fullstack
          </Rubrik>
        </Box>

        <Box sx={{ width: "50%", marginBottom: 4, marginLeft: 10 }}>
          <Rubrik sx={{ color: "#F7F7F7", fontSize: 30, fontWeight: 400 }}>
            Kort sagt..
          </Rubrik>
          <Typography
            sx={{
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: 25,
              fontFamily: "Roboto",
              fontWeight: 200,
              marginBottom: 2,
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
              transition: "color 0.3s",
              background:
                "linear-gradient(to bottom, rgba(250,220,197,255), rgba(235,190,180,255))",
              paddingY: 1,
              paddingX: 2,
              marginTop: 1,
              borderRadius: 2,
              color: "rgb(37,31,37)",
              fontFamily: "Rubrik",
              fontWeight: "lighter",
              fontSize: { xs: 18, md: 22, xl: 30 },
              lineHeight: 1.5,
              "&:hover": {
                color: "rgb(67, 61, 67)",
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
