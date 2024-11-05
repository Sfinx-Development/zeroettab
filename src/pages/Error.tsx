import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(34,32,37,255)", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: { xs: 10, md: 20 }, 
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{
          color: "rgba(254,232,209,255)", // Färg för texten
          fontWeight: 800,
          marginBottom: 2,
          textAlign: "center",
        }}
      >
        Oops! Wrong URL?
      </Typography>

      <Typography
        sx={{
          color: "rgba(247, 247, 247, 0.9)",
          fontSize: 18,
          fontFamily: "Roboto",
          fontWeight: 200,
          maxWidth: "80%",
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        Det verkar som att du har navigerat till en ogiltig sida. Kontrollera
        URL:en och försök igen.
      </Typography>

      <Button
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "rgba(255,255,255,0.5)",
          backgroundColor: "rgba(229,186,179,1)", 
          "&:hover": {
            backgroundColor: "rgba(254,232,209,0.5)", 
          },
          paddingX: 3,
          paddingY: 1,
        }}
        onClick={() => {
          navigate("/"); 
        }}
      >
        Gå tillbaka
      </Button>
    </Box>
  );
}

