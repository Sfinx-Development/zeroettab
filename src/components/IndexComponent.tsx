import { keyframes } from "@emotion/react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { Rubrik } from "./Footer";

export const isPhoneHeigher800px = window.innerHeight > 800;
export const isPhoneHeigher900px = window.innerHeight > 900;

export default function IndexComponent() {
  // const isMobile = useMediaQuery("(max-width:900px)");
  const isShortPhone = useMediaQuery(
    "(max-width:900px) and (max-height:700px)"
  );
  const isLongPhone = useMediaQuery("(max-width:900px) and (min-height:800px)");

  const bounce = keyframes`
    0%, 100% { transform: translateY(0); opacity: 0.6; }
    50% { transform: translateY(10px); opacity: 1; }
  `;

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        minHeight: "100svh",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/indeximg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(238,233,230,0.6), rgba(238,233,230,0.55))",
          zIndex: 0,
        }}
      />

      {/* HERO CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,

          // 🔑 ENDA VIKTIGA ÄNDRINGEN:
          minHeight: {
            xs: isLongPhone ? "75svh" : "auto",
            md: "auto",
          },

          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4, md: 6, xl: 20 },
          pt: { xs: 4, md: 5 },
          gap: { xs: 4, md: 6 },
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {/* TEXT */}
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            sx={{
              fontSize: { xs: 15, md: 16 },
              opacity: 0.8,
              mb: 1,
            }}
          >
            <strong>Zeroett</strong> · utvecklingsteam i Borås & Sjuhärad
          </Typography>

          <Rubrik
            sx={{
              fontSize: isShortPhone ? 24 : { xs: 26, sm: 36, md: 44, xl: 56 },
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Vi hjälper företag att skapa
            <br />
            digitala lösningar som speglar vilka de är.
          </Rubrik>

          <Typography
            sx={{
              fontSize: isShortPhone
                ? 16
                : isLongPhone
                ? 18
                : { xs: 16, md: 19 },
              maxWidth: 640,
              mb: 3,
            }}
          >
            Hemsidor, e-tjänster och system – byggt nära, begripligt och
            anpassat efter verkligheten.
          </Typography>

          <Link
            href="/contact#form"
            sx={{
              background: "rgba(52,48,56,1)",
              px: 2.5,
              py: 1,
              borderRadius: 2,
              color: "rgba(250,220,197,255)",
              textDecoration: "none",
              fontFamily: "Roboto",
              fontSize: isLongPhone ? 18 : { xs: 16, md: 18 },
              display: "inline-block",
            }}
          >
            Prata med oss
          </Link>
        </Box>

        {/* BILD */}
        <Box
          component="img"
          src="https://i.imgur.com/OqvOzUd.png"
          alt="Two girls coding"
          sx={{
            mt: { xs: 0 },
            maxHeight: isShortPhone
              ? 220
              : isLongPhone
              ? 320
              : { xs: 280, md: 340, xl: 460 },
            width: "auto",
          }}
        />
      </Box>

      {/* SCROLL PIL */}
      <Box
        sx={{
          zIndex: 2,
          pb: isShortPhone ? 2 : 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <KeyboardArrowDownRoundedIcon
          sx={{
            fontSize: 42,
            animation: `${bounce} 1.8s infinite`,
          }}
        />
      </Box>
    </Box>
  );
}
