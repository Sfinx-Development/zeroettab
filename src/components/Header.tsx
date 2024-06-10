import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Header(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        flexDirection: isMobile ? "column" : "row",
        position: "relative",
        paddingY: 3,
      }}
    >
      <img
        src="https://i.imgur.com/qY6tjPU.png"
        alt="logo saying zeroett"
        width={300}
      />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}></Box>
        <Link sx={{ textDecoration: "none" }} href="/about" marginX={2}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: 26,
              lineHeight: 2,
            }}
          >
            About
          </Typography>
        </Link>
        <Link sx={{ textDecoration: "none" }} href="/about" marginX={2}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: 26,
              lineHeight: 2,
            }}
          >
            Contact Us
          </Typography>
        </Link>
        <Link sx={{ textDecoration: "none" }} href="/about" marginX={2}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: 26,
              lineHeight: 2,
            }}
          >
            Portfolio
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
