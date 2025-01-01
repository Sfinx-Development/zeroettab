import { Box, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isMobile } from "./CompanyForm";
import { Rubrik } from "./Footer";
import WhoAreWe from "./WhoAreWe";
import WhoAreWePhone from "./WhoAreWePhone";

const titles = ["hemsida?", "e-tjänst?", "webbshop?", "mobilapp?"];

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
        <Box
          sx={{
            marginBottom: { xs: 50, md: 20 },
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
                fontSize: { xs: 35, md: 60, xl: 75 },
                letterSpacing: 1.5,
                marginRight: 1.5,
                // color: "#",
              }}
            >
              Behöver du en
            </Rubrik>
            <Rubrik
              sx={{
                fontSize: { xs: 35, md: 60, xl: 75 },
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

          {/* <Box sx={{ paddingTop: 10, display: "flex", gap: 6 }}> */}

          {!isMobile ? <WhoAreWe /> : <WhoAreWePhone />}

          {/* <Box
            sx={{
              display: "flex",
              paddingTop: 0,
              alignItems: "start",
              justifyContent: "center",
              height: "100%",
              marginRight: { xs: 0, md: 5, xl: 40 },
              paddingBottom: 2,
              marginTop: -2,
            }}
          >
            <KeyboardArrowDownIcon
              sx={{
                color: "rgba(235,190,180,255)",
                fontSize: { xs: 20, md: 40, xl: 50 },
                padding: 0,
                animation: `bounce 1.5s ease-in-out infinite`, // Lägg till animation
                "@keyframes bounce": {
                  "0%, 100%": {
                    transform: "translateY(0)",
                  },
                  "50%": {
                    transform: "translateY(10px)", // Justera höjden på studsen
                  },
                },
              }}
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
