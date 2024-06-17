import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";

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
      component={"header"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
          width: isMobile ? "100%" : "auto",
          marginLeft: isMobile ? 0 : 15,
        }}
      >
        <Link href="/" sx={{ textDecoration: "none" }}>
          <img
            src="https://i.imgur.com/5Fk6tu4.png"
            alt="Zeroett"
            width={isMobile ? 300 : 350}
            style={{ marginBottom: isMobile ? 16 : 0 }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingX: 2,
          gap: 2,
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
            <FormattedMessage id="about" />
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
            <FormattedMessage id="contact" />
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            marginX: isMobile ? 0 : 2,
            marginY: isMobile ? 1 : 0,
          }}
          href="/projects"
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
            <FormattedMessage id="project" />
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
