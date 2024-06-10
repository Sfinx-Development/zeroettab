import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Header(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: isMobile ? "column" : "row",
        position: "relative",
        paddingY: 3,
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
          width: isMobile ? "100%" : "auto",
          paddingX: 2, // Add padding to give some breathing room
        }}
      >
        <img
          src="https://i.imgur.com/qY6tjPU.png"
          alt="logo saying zeroett"
          width={isMobile ? 200 : 300}
          style={{ marginBottom: isMobile ? 16 : 0 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          paddingX: 2,
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            marginX: isMobile ? 0 : 2,
            marginY: isMobile ? 1 : 0,
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/about"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 20 : 26,
              lineHeight: 2,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
            }}
          >
            About
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            marginX: isMobile ? 0 : 2,
            marginY: isMobile ? 1 : 0,
          }}
          href="/contact"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 20 : 26,
              lineHeight: 2,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
            }}
          >
            Contact Us
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            marginX: isMobile ? 0 : 2,
            marginY: isMobile ? 1 : 0,
          }}
          href="/portfolio"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 20 : 26,
              lineHeight: 2,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
            }}
          >
            Portfolio
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
