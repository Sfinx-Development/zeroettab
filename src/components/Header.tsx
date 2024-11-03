import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useLanguageContext } from "../context/languageContext";
import MySvgImage from "./SvgImage";

export default function Header(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { language, setLanguage } = useLanguageContext();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: isMobile ? "column" : "row",
        zIndex: 999,
        position: "sticky",
        backgroundColor: "#F7F7F7",
        top: 0,
      }}
      component={"header"}
    >
      <Box
        sx={{
          display: "flex",
          paddingY: 2,
          width: "85%",
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "rgb(67, 61, 67)",
            },
          }}
          href="/about"
        >
          <Typography
            sx={{
              color: "rgb(37,31,37)",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 22,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "rgb(67, 61, 67)",
              },
              whiteSpace: "nowrap",
            }}
          >
            <FormattedMessage id="about" />
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          href="/offers"
        >
          <Typography
            sx={{
              color: "rgb(37,31,37)",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 22,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "rgb(67, 61, 67)",
              },
              whiteSpace: "nowrap",
            }}
          >
            <FormattedMessage id="offers" />
          </Typography>
        </Link>
        <Link href="/">
          <MySvgImage />
          {/* <svg
         
          ></svg> */}
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          href="/projects"
        >
          <Typography
            sx={{
              color: "rgb(37,31,37)",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 22,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "rgb(67, 61, 67)",
              },
              whiteSpace: "nowrap",
            }}
          >
            <FormattedMessage id="projects" />
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            background:
              "linear-gradient(to bottom,rgba(250,220,197,255), rgba(235,190,180,255))",
            paddingY: 1,
            paddingX: 2,
            borderRadius: 2,
          }}
          href="/contact"
        >
          <Typography
            sx={{
              color: "rgb(37,31,37)",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 22,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "rgb(67, 61, 67)",
              },
              whiteSpace: "nowrap",
            }}
          >
            <FormattedMessage id="contact" />
          </Typography>
        </Link>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
            marginTop: "-42px",
          }}
        > */}
        {/* <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              onClick={handleClick}
              sx={{
                color: "white",
                backgroundColor: "#662c9c",
                "&:hover": { backgroundColor: "#422a75" },
                borderRadius: "50%",
              }}
            >
              <LanguageIcon />
            </IconButton>
          </Box> */}
        {/* </Box> */}
      </Box>

      {/* <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(language)}
        sx={{ mt: 1 }}
      >
        <MenuItem onClick={() => handleClose("sv")}>
          <Typography sx={{ color: language === "sv" ? "#662c9c" : "inherit" }}>
            Svenska
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("en")}>
          <Typography sx={{ color: language === "en" ? "#662c9c" : "inherit" }}>
            English
          </Typography>
        </MenuItem>
      </Menu> */}
    </Box>
  );
}
