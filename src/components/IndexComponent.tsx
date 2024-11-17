import { Box, Link, Typography } from "@mui/material";
import { isMobile } from "./CompanyForm";
import { Rubrik } from "./Footer";
import WhoAreWe from "./WhoAreWe";
import WhoAreWePhone from "./WhoAreWePhone";

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
          flexDirection: "column",
          display: "flex",
          padding: { xs: 1.5, sm: 2, md: 0, lg: 2, xl: 4 },
          height: "100%",
          // backgroundImage: `url(https://i.imgur.com/9sO10K9.png)`, // Lägg till en ljus övertoning
          // backgroundSize: "cover", // Gör att bilden täcker hela området
          // backgroundPosition: "center left", // Flytta fokus mot botten
          // backgroundRepeat: "no-repeat", // Förhindra att bilden upprepas
          // justifyContent: "flex-start",
          backgroundColor: "rgba(238,233,230,255)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginBottom: { xs: 30, md: 20 },
            marginLeft: { xs: 0, md: 5, xl: 20 },
            marginTop: { xs: 5, md: 10, xl: 20 },
            width: "100%",
            height: "100%",
          }}
        >
          <Rubrik
            sx={{
              fontSize: { xs: 35, md: 60, xl: 75 },
              letterSpacing: 1.5,
              // color: "#",
            }}
          >
            Vi gillar kod.
          </Rubrik>
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
              background:
                "linear-gradient(to bottom, rgba(250,220,197,255), rgba(235,190,180,255))",
              paddingY: 1,
              paddingX: 2,
              marginTop: 1,
              borderRadius: 2,
              color: "rgb(37,31,37)",
              fontFamily: "Roboto",
              fontWeight: "lighter",
              fontSize: { xs: 20, md: 22, xl: 40 },
              lineHeight: 1.5,
              "&:hover": {
                color: "rgb(67, 61, 67)",
              },
            }}
            href="/contact"
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
