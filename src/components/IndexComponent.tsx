import { keyframes } from "@emotion/react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { isMobile } from "./CompanyForm";
import { Rubrik } from "./Footer";
import NewsPreview from "./NewsPreviewComponent";
import { news } from "./parallax/ParallaxNews";

export const isPhoneHeigher800px = window.innerHeight > 800;
export const isPhoneHeigher900px = window.innerHeight > 900;

export default function IndexComponent() {
  // const isMobile = useMediaQuery("(max-width:900px)");
  const isShortPhone = useMediaQuery(
    "(max-width:900px) and (max-height:700px)",
  );
  const isLongPhone = useMediaQuery("(max-width:900px) and (min-height:800px)");
  // const isLargeScreen = useMediaQuery("(min-width:1600px)");

  const bounce = keyframes`
    0%, 100% { transform: translateY(0); opacity: 0.6; }
    50% { transform: translateY(10px); opacity: 1; }
  `;

  const first = news[0];

  const isRecent = (() => {
    const newsDate = new Date(first.date);
    const today = new Date();

    const diffDays =
      (today.getTime() - newsDate.getTime()) / (1000 * 60 * 60 * 24);

    return diffDays <= 7;
  })();



  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        minHeight: "100svh",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/bubbles.png)",
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
          minHeight: {
            xs: isLongPhone ? "75svh" : "auto",
            md: "65vh",
            xl: "75vh",
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: {
            xs: 2,
            sm: 4,
            md: 6,
            xl: 20,
          },

          pt: { xs: 4, md: 5, xl: 6 },
          gap: {
            xs: 4,
            md: 6,
            xl: 12,
          },
          maxWidth: { xs: "1600px", xl: "100%" },
          margin: {
            xs: "0 auto",
            xl: "0",
          },
        }}
      >
        {/* TEXT */}
        <Box sx={{ maxWidth: { xs: 720, xl: 1200 } }}>
          <Typography
            sx={{
              fontSize: { xs: 15, md: 16, xl: 24 },
              opacity: 0.8,
              mb: 1,
            }}
          >
            <strong>Zeroett</strong> · utvecklingsteam i Borås & Sjuhärad
          </Typography>

          <Rubrik
            sx={{
              fontSize: isShortPhone ? 24 : { xs: 24, sm: 36, md: 44, xl: 65 },
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
                  : { xs: 16, md: 19, xl: 28 },
              maxWidth: { xs: 640, xl: 900 },
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
              fontSize: isLongPhone ? 18 : { xs: 16, md: 18, xl: 28 },
              display: "inline-block",
            }}
          >
            Prata med oss
          </Link>
          {!isMobile && isRecent && <NewsPreview />}
        </Box>

        {/* BILD */}
        <Box
          component="img"
          src="https://i.imgur.com/OqvOzUd.png"
          alt="Two girls coding"
          sx={{
            mt: { xs: 0 },
            maxHeight: isShortPhone
              ? 200
              : isLongPhone
                ? 320
                : { xs: 280, md: 340, xl: 580 },
            width: {
              xs: "auto",
              xl: 650, // ← nyckeln
            },
          }}
        />
      </Box>

      {/* SCROLL PIL */}
      <Box
        sx={{
          zIndex: 2,
          mt: { md: 2 },
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
