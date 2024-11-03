import { Box, Link, Typography } from "@mui/material";
import { Rubrik } from "./Footer";

export default function ServicesComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(238,233,230,255)",
        display: "flex",
        justifyContent: "start",
        paddingX: { xs: 1 },
        alignItems: { xs: "center", xl: "start" },
        position: "fixed",
        zIndex: 2,
        height: "100%",
      }}
    >
      <Box
        sx={{
          marginBottom: { xs: 30, md: 20 },
          marginLeft: { xs: 0, md: 10, xlg: 20 },
          marginTop: { md: 0, xl: 20 },
        }}
      >
        <Rubrik
          sx={{ fontSize: { xs: 40, md: 60, xl: 70 }, letterSpacing: 1.5 }}
        >
          Här är tjänster första komponent
        </Rubrik>
        <Typography
          sx={{
            fontSize: { xs: 30, md: 35, xl: 45 },
            marginY: 0.5,
            marginBottom: 1,
            fontFamily: "Roboto",
            fontWeight: "lighter",
          }}
        >
          Berätta om din idé, vi byggger den.
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
            fontSize: { xs: 18, md: 22, xl: 30 },
            lineHeight: 1.5,
            "&:hover": {
              color: "rgb(67, 61, 67)",
            },
          }}
          href="/contact"
        >
          Kontakta oss direkt
        </Link>
      </Box>
    </Box>
  );
}
