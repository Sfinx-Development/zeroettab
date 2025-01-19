import { Box, Link, Typography } from "@mui/material";
import { isMobile } from "./CompanyForm";
import { Rubrik } from "./Footer";
import { isPhoneHeigher800px, isPhoneHeigher900px } from "./IndexComponent";
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
          // background:
          //   "linear-gradient(to bottom,rgba(240,231,226,1), rgba(229,186,179,1)))",
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
            sx={{ fontSize: { xs: 35, md: 60, xl: 75 }, letterSpacing: 1.5 }}
          >
            Utvalda projekt
          </Rubrik>
          <Typography
            sx={{
              fontSize: { xs: 25, md: 35, xl: 50 },
              marginY: 0.5,
              marginBottom: { xs: 2, md: 1 },
              fontFamily: "Roboto",
              fontWeight: "lighter",
              width: { xs: "68%" },
            }}
          >
            En blandning av vad vi gjort tidigare
          </Typography>
          <Link
            aria-label="Kontaktformulär"
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
          <Box
            sx={{
              paddingTop: isMobile
                ? isPhoneHeigher900px
                  ? 26
                  : isPhoneHeigher800px
                  ? 19
                  : 7
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
