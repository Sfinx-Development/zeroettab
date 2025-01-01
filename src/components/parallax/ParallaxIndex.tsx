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
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(34,32,37,255)",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "column" }, // Lägg till radlayout för större skärmar
          justifyContent: "space-between", // Separera vänster och höger sektion
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            // width: { xs: "90%", md: "70%", xl: "55%" }, // Dynamisk bredd för vänster sektion
            marginBottom: { xs: 0, md: 0 },
            // padding: { xs: 3, md: 5 },
            // backgroundColor: "red",
            alignSelf: "flex-start",
            display: "flex",
            // marginTop: { xs: 10, md: 20, xl: 25 },
            // marginLeft: { xs: 0, md: 4, xl: 6 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: "blue",
              padding: { xs: 3, md: 5 },
            }}
          >
            <Rubrik
              sx={{
                color: "#F7F7F7",
                fontSize: { xs: 25, md: 30, xl: 40 },
                fontWeight: 400,
              }}
            >
              Frontend, backend eller fullstack?
            </Rubrik>
            <Typography
              sx={{
                color: "rgba(247, 247, 247, 0.9)",
                fontSize: { xs: 18, md: 20, xl: 22 },
                fontFamily: "Roboto",
                fontWeight: 200,
                paddingBottom: { xs: 2 },
                width: { xs: "90%", md: "70%", xl: "55%" },
              }}
            >
              Hos oss behöver du inte välja. Men vad är det vi gör, egentligen?
              Kanske har du, likt många andra, lite halvbra koll på vad
              skillnaden är. Frontend, backend eller fullstack - vad är vad och
              vad behöver du?
            </Typography>
          </Box>

          <Box
            sx={{
              // height: { xs: 150, md: 300, xl: 300 },

              width: "auto",
              overflow: "hidden",
              display: { xs: "none" },
              // backgroundColor: "pink",
              marginRight: { md: 20 },
            }}
          >
            <img
              src="https://i.imgur.com/0qP3TIO.png"
              alt="Pink decoration"
              rel="preload"
              style={{
                width: "100%",
                height: "100%",
                // backgroundColor: "black",
                objectFit: "contain", // Ser till att hela bilden syns inom ramen utan att sträckas
              }}
            />
          </Box>
        </Box>
        {/* Din bubbla-komponent */}
        <BubblaComponent />

        {/* Höger sektion */}
        <Box
          sx={{
            // width: { xs: "90%", md: "70%", xl: "55%" }, // Dynamisk bredd för vänster sektion
            marginBottom: { xs: 4, md: 0 },
            padding: { xs: 3, md: 5 },
            // backgroundColor: "red",
            alignSelf: "flex-start",
            // marginTop: { xs: 10, md: 20, xl: 25 },
            // marginLeft: { xs: 0, md: 4, xl: 6 },
          }}
        >
          <Rubrik
            sx={{
              color: "#F7F7F7",
              fontSize: { xs: 25, md: 30, xl: 40 },
              fontWeight: 400,
              // textAlign: { xs: "left", md: "right" },
              width: "100%",
            }}
          >
            Kort sagt..
          </Rubrik>
          <Typography
            sx={{
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: { xs: 18, md: 20, xl: 22 },
              fontFamily: "Roboto",
              fontWeight: 200,
              paddingBottom: { xs: 2 },
              width: { xs: "90%", md: "70%", xl: "55%" },
            }}
          >
            Oavsett vad du behöver hjälp med har vi lösningen. Våra tekniska
            lösningar är inte bara robusta. De är också anpassade för att växa
            med ditt företag och maximera ditt bolags digitala närvaro. Jobba
            ihop?
          </Typography>
          <Link
            aria-label="Kontaktformulär"
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
            href="/contact#form"
          >
            Kontakt
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
