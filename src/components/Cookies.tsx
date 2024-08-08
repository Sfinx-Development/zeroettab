import { Box, Button, Link, Typography } from "@mui/material";
import { useState } from "react";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 365;
    setAccepted(true);
  };

  if (accepted || document.cookie.includes("cookieConsent=true")) {
    return null;
  }

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
        paddingX: 3,
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
            backgroundColor: "#7a52a1",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#5b3b7e",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
            textTransform: "none",
            paddingX: 3,
            paddingY: 1,
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
            color: "#7a52a1",
            borderColor: "#7a52a1",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "#000000",
              borderColor: "#7a52a1",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
            paddingX: 3,
            paddingY: 1,
            textTransform: "none",
          }}
        >
          Läs mer
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;
