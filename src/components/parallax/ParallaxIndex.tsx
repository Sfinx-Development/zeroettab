import { Box, Link, Typography } from "@mui/material";
import BubblaComponent from "../BubblaComponent";
import { Rubrik } from "../Footer";

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
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            marginBottom: 4,
            paddingTop: 20,
            marginLeft: { xs: 3, md: 10, sm: 3, lg: 10, xlg: 20 },
          }}
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

        <BubblaComponent />

        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            marginBottom: 10,
            marginLeft: { xs: 2, md: 10, sm: 3, lg: 10, xlg: 20 },
          }}
        >
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
