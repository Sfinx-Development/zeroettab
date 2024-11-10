import { Box, Link, Typography } from "@mui/material";
import { Rubrik } from "./Footer";
import WhoAreWe from "./WhoAreWe";

export default function IndexComponent() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 1,
        height: "100%",
      }}
    >
      <Box
        sx={{
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          padding: { xs: 1.5, sm: 2, md: 0, lg: 2, xl: 4 },
          height: "100%",
          backgroundColor: "rgba(238,233,230,255)",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginBottom: { xs: 30, md: 20 },
            marginLeft: { xs: 0, md: 5, xl: 20 },
            marginTop: { md: 10, xl: 25 },
            width: "100%",
          }}
        >
          <Rubrik
            sx={{ fontSize: { xs: 40, md: 60, xl: 75 }, letterSpacing: 1.5 }}
          >
            Vad behöver du?
          </Rubrik>
          <Typography
            sx={{
              fontSize: { xs: 30, md: 35, xl: 50 },
              marginY: 0.5,
              marginBottom: { xs: 2, md: 1 },
              fontFamily: "Roboto",
              fontWeight: "lighter",
              width: { xs: "70%" },
            }}
          >
            Hemsida, e-tjänst eller kanske ett API.
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
              fontFamily: "Roboto",
              fontWeight: "lighter",
              fontSize: { xs: 18, md: 22, xl: 40 },
              lineHeight: 1.5,
              "&:hover": {
                color: "rgb(67, 61, 67)",
              },
            }}
            href="/contact"
          >
            Kontakta oss direkt
          </Link>

          <WhoAreWe />
        </Box>
      </Box>
    </Box>
  );
}
