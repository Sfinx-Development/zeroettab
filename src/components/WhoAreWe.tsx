import { keyframes } from "@emotion/react";
import EastIcon from "@mui/icons-material/East";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Link, Typography } from "@mui/material";
import { Rubrik } from "./Footer";
import SvgIndexZeroett from "./SvgIndex";

// Definiera keyframes för hopprörelsen
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(0deg); /* Mjukare hopp */
  }
`;

export default function WhoAreWe() {
  return (
    <Box
      sx={{
        paddingTop: { xs: 6, md: 8, xl: 18 },
        display: "flex",
        // gap: { xs: 2, sm: 2, md: 6, lg: 8, xl: 8 },
        flexDirection: "column",
        width: "100%",
        paddingBottom: 0,
        marginBottom: 0,
        height: { md: "30%" },
        // backgroundColor: "blue",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          // paddingTop: { xs: 6, md: 10, xl: 20 },
          display: "flex",
          gap: { xs: 2, sm: 2, md: 6, lg: 8, xl: 8 },
          flexDirection: { xs: "column", md: "row", sm: "row" },
          width: "100%",
          paddingBottom: 0,
          marginBottom: 0,
          // backgroundColor: "green",
        }}
      >
        <Box>
          <Rubrik
            sx={{
              fontSize: { xs: 20, xl: 40 },
              letterSpacing: 1.5,
              textWrap: "nowrap",
            }}
          >
            Vilka är vi?
          </Rubrik>
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",

              marginBottom: 1,
            }}
          >
            <EastIcon
              sx={{ color: "rgb(216,163,153)", fontSize: { xs: 20, xl: 40 } }}
            />
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "rgb(37,31,37)" }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 20, xl: 40 },
                  fontFamily: "Roboto",
                  fontWeight: "lighter",
                  textAlign: "center",
                }}
              >
                Om oss
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          <Rubrik
            sx={{
              fontSize: { xs: 20, xl: 40 },
              letterSpacing: 1.5,
              textWrap: "nowrap",
            }}
          >
            Vad kan vi göra för dig?
          </Rubrik>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <EastIcon
              sx={{ color: "rgb(216,163,153)", fontSize: { xs: 20, xl: 40 } }}
            />
            <Link
              href="/offers"
              style={{ textDecoration: "none", color: "rgb(37,31,37)" }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 20, xl: 40 },
                  fontFamily: "Roboto",
                  fontWeight: "lighter",
                }}
              >
                Tjänster
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          <Rubrik
            sx={{
              fontSize: { xs: 20, xl: 40 },
              letterSpacing: 1.5,
              textWrap: "nowrap",
            }}
          >
            Vad har vi gjort tidigare?
          </Rubrik>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <EastIcon
              sx={{ color: "rgb(216,163,153)", fontSize: { xs: 20, xl: 40 } }}
            />
            <Link
              href="/projects"
              style={{ textDecoration: "none", color: "rgb(37,31,37)" }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 20, xl: 40 },
                  fontFamily: "Roboto",
                  fontWeight: "lighter",
                }}
              >
                Projekt
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            width: {
              xs: "80%",
              sm: "40%",
              md: "30%",
              lg: "25%",
              xl: "20%",
            },
            maxWidth: "100%", // Förhindra att den blir större än förälderns maxbredd
            flexShrink: 1,
            flexGrow: 0,
            objectFit: "contain",
            marginTop: { xs: 4, md: -4 },
          }}
        >
          <SvgIndexZeroett />
        </Box>
      </Box>
      <ExpandMoreIcon
        // component="img"
        // src="https://i.imgur.com/uu3B9aY.png"
        // alt="An arrow pointing down"
        sx={{
          height: 50,
          marginBottom: 0,
          width: 50,
          // backgroundColor: "red",
          marginRight: { xs: 0, md: 10, lg: 30, xl: 40 },
          display: "flex",
          flex: 1,
          animation: `${bounce} 2s infinite ease-in-out`,
          transformOrigin: "center", // Säkerställer att rotation sker från mitten
        }}
      />
    </Box>
  );
}
