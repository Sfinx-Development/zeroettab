import EastIcon from "@mui/icons-material/East";
import { Box, Link, Typography } from "@mui/material";
import { Rubrik } from "./Footer";
import SvgIndexZeroett from "./SvgIndex";

export default function ContactComponent() {
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
            marginLeft: { xs: 0, md: 5, xlg: 20 },
            marginTop: { md: 10, xl: 20 },
          }}
        >
          <Rubrik
            sx={{ fontSize: { xs: 40, md: 60, xl: 70 }, letterSpacing: 1.5 }}
          >
            Hur kan vi hjälpa dig?
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

          {/* <Box sx={{ paddingTop: 10, display: "flex", gap: 6 }}> */}
          <Box
            sx={{
              paddingTop: { xs: 6, md: 10 },
              display: "flex",
              gap: { xs: 2, sm: 2, md: 6, lg: 8, xl: 8 },
              flexDirection: { xs: "column", md: "row", sm: "row" },
            }}
          >
            <Box>
              <Rubrik
                sx={{ fontSize: 20, letterSpacing: 1.5, textWrap: "nowrap" }}
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
                <EastIcon sx={{ color: "rgb(216,163,153)" }} />
                <Link
                  href="/aboutus"
                  style={{ textDecoration: "none", color: "rgb(37,31,37)" }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
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
                sx={{ fontSize: 20, letterSpacing: 1.5, textWrap: "nowrap" }}
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
                <EastIcon sx={{ color: "rgb(216,163,153)" }} />
                <Link
                  href="/offers"
                  style={{ textDecoration: "none", color: "rgb(37,31,37)" }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
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
                sx={{ fontSize: 20, letterSpacing: 1.5, textWrap: "nowrap" }}
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
                <EastIcon sx={{ color: "rgb(216,163,153)" }} />
                <Link
                  href="/projects"
                  style={{ textDecoration: "none", color: "rgb(37,31,37)" }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
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
                flexShrink: 1, // Gör att den krymper om det behövs på mindre skärmar
                flexGrow: 0, // Hindrar den från att växa för mycket
                objectFit: "contain", // Bevarar proportionerna och förhindrar att den klipps
                marginTop: { xs: 4, md: -4 },
              }}
            >
              <SvgIndexZeroett />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
