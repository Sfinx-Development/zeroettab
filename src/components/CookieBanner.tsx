import { Box, Button, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    window.location.reload(); // Ladda om sidan för att aktivera Google Analytics
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(20, 20, 20, 0.9)",
        color: "#FFFFFF",
        boxShadow: "0 -2px 15px rgba(0, 0, 0, 0.7)",
        zIndex: 1000,
        display: "flex",
        paddingY: 2,

        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginBottom: { xs: "8px", md: 0 },
          marginX: 2,

          color: "white",
        }}
      >
        Genom att acceptera godkänner du att vi använder Cookies för att
        analysera trafik via Google Analytics.
      </Typography>
      <Box sx={{ display: "flex", marginX: 2 }}>
        <Button
          variant="contained"
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
            fontFamily: "Roboto",
            fontWeight: "semibold",
            fontSize: { xs: 16, md: 18, xl: 40 },
            lineHeight: 1.5,
            "&:hover": {
              color: "rgb(67, 61, 67)",
            },
          }}
          onClick={handleAccept}
        >
          Acceptera
        </Button>
        <Button
          variant="outlined"
          component={Link}
          href="https://cookieinformation.com/sv/vad-ar-en-cookie/"
          sx={{
            marginLeft: "8px",
            color: "rgba(250,220,197,255)", // Rosa färg som matchar gradienten
            borderColor: "rgba(250,220,197,255)", // Matchar gradientens ljusare färg
            paddingY: 1, // Samma vertikala padding
            paddingX: 2, // Samma horisontella padding
            marginTop: 1,
            borderRadius: 2,
            fontFamily: "Roboto",
            fontWeight: "semibold",
            fontSize: { xs: 16, md: 18, xl: 40 }, // Samma textstorlek
            lineHeight: 1.5,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(250,220,197,0.2)", // Subtil bakgrundsfärg vid hover
              color: "rgba(235,190,180,255)", // Behåll samma rosa färg vid hover
              borderColor: "rgba(250,220,197,255)", // Behåller samma kantfärg
            },
          }}
        >
          Läs mer
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;
