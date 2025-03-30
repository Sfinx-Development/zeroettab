import { Box, Button, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isMobile } from "./CompanyForm";
import { Rubrik } from "./Footer";
import WhoAreWe from "./WhoAreWe";
import WhoAreWePhone from "./WhoAreWePhone";
import { news } from "./parallax/ParallaxNews";

const titles = ["hemsida?", "e-tjänst?", "webbshop?", "mobilapp?"];
export const isPhoneHeigher800px = window.innerHeight > 800;
export const isPhoneHeigher900px = window.innerHeight > 900;
export default function IndexComponent() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) =>
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Ändra var 3:e sekund
    return () => clearInterval(interval); // Rensa när komponenten demonteras
  }, []);

  const latestNews = news[0];
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
          flexDirection: "column",
          display: "flex",
          padding: { xs: 1.5, sm: 2, md: 0, lg: 2, xl: 4 },
          height: "100%",
          // backgroundImage: `url(https://i.imgur.com/9sO10K9.png)`, // Lägg till en ljus övertoning
          // backgroundSize: "cover", // Gör att bilden täcker hela området
          // backgroundPosition: "center left", // Flytta fokus mot botten
          // backgroundRepeat: "no-repeat", // Förhindra att bilden upprepas
          // justifyContent: "flex-start",
          // background:
          //   "linear-gradient(to bottom,rgba(240,231,226,1), rgba(229,186,179,1)))",
          backgroundColor: "rgba(238,233,230,255)",
          width: "100%",
        }}
      >
        {isMobile && latestNews && (
          <Box
            sx={{
              width: "102%",
              marginLeft: -2,
              marginTop: -1.5,
              background: "linear-gradient(90deg, #000000, #333333)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              paddingY: 0.5,
              justifyContent: "space-between",
              // borderRadius: "12px",
              // marginY: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <Box sx={{ flex: 1, padding: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.9rem",
                  marginLeft: 1,
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                📰 Nyhet: {latestNews.title}
              </Typography>
            </Box>

            <Button
              aria-label="Se alla nyheter"
              href="/news#list"
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                textTransform: "none",
                fontSize: "0.75rem",
                fontWeight: 600,
                marginRight: 2,
                borderRadius: "20px",
                paddingX: 1,
                paddingY: 0.5,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Läs mer
            </Button>
          </Box>
        )}

        <Box
          sx={{
            marginBottom: { xs: 30, md: 20 },
            marginLeft: { xs: 0, md: 5, xl: 20 },
            marginTop: { xs: 2, md: 10, xl: 20 },
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Rubrik
              sx={{
                fontSize: { xs: 32, md: 60, xl: 75 },
                letterSpacing: 1.5,
                marginRight: 1.5,
              }}
            >
              Behöver du en
            </Rubrik>
            <Rubrik
              sx={{
                fontSize: { xs: 32, md: 60, xl: 75 },
                letterSpacing: 1.5,
                // color: "#",
                opacity: 0,
                animation: `fade-in-out 3s ease-in-out infinite`,
                animationDelay: `0s`,
                "@keyframes fade-in-out": {
                  "0%": { opacity: 0, transform: "translateY(-10px)" },
                  "25%": { opacity: 1, transform: "translateY(0)" },
                  "75%": { opacity: 1, transform: "translateY(0)" },
                  "100%": { opacity: 0, transform: "translateY(10px)" },
                },
              }}
            >
              {titles[currentTitleIndex]}
            </Rubrik>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: 25, md: 35, xl: 50 },
              marginY: 0.5,
              marginBottom: { xs: 2, md: 1 },
              fontFamily: "Roboto",
              fontWeight: "lighter",
              width: { xs: "70%" },
              // color: "#F7F7F7",
            }}
          >
            Berätta om din idé, vi bygger den.
          </Typography>
          <Link
            sx={{
              textDecoration: "none",
              transition: "color 0.3s",
              // background: "rgba(44, 40, 38, 255)",
              background:
                "linear-gradient(to bottom, rgba(250,220,197,255), rgba(235,190,180,255))",
              paddingY: 1,
              paddingX: 2,
              marginTop: 1,
              borderRadius: 2,
              // color: "#F7F7F7",
              color: "rgb(37,31,37)",
              fontFamily: "Roboto",
              fontWeight: "semibold",
              fontSize: { xs: 20, md: 22, xl: 40 },
              lineHeight: 1.5,
              "&:hover": {
                color: "rgb(67, 61, 67)",
              },
            }}
            href="/contact#form"
          >
            Kontakta oss
          </Link>
          {/* <NewsPreview /> */}

          {/* <Box sx={{ paddingTop: 10, display: "flex", gap: 6 }}> */}
          <Box
            sx={{
              paddingTop: isMobile
                ? isPhoneHeigher900px
                  ? 20
                  : isPhoneHeigher800px
                  ? 12
                  : 0
                : undefined,
            }}
          >
            {!isMobile ? <WhoAreWe /> : <WhoAreWePhone />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
