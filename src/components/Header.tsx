import LanguageIcon from "@mui/icons-material/Language";
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useLanguageContext } from "../context/languageContext";

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
        justifyContent: "space-between",
        width: "100%",
        flexDirection: isMobile ? "column" : "row",
        zIndex: 1,
        backgroundColor: "transparent",
      }}
      component={"header"}
    >
      <Box
        sx={{
          paddingY: 2,
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
          width: isMobile ? "100%" : "auto",
          marginLeft: isMobile ? 0 : 10,
        }}
      >
        <Link href="/" sx={{ textDecoration: "none" }}>
          <img
            src="https://i.imgur.com/5Fk6tu4.png"
            alt="Zeroett"
            width={isMobile ? 350 : 350}
            style={{ marginBottom: isMobile ? 16 : 0 }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingY: 2,
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-end",
          width: isMobile ? "100%" : "auto",
          gap: 2,
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
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
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
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
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/contact"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
              whiteSpace: "nowrap",
            }}
          >
            <FormattedMessage id="contact" />
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/projects"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
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
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/offers"
        >
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontWeight: "300",
              fontSize: isMobile ? 18 : 20,
              lineHeight: 1.5,
              transition: "color 0.3s",
              "&:hover": {
                color: "#896daf",
              },
              whiteSpace: "nowrap",
            }}
          >
            <FormattedMessage id="offers" />
          </Typography>
        </Link>
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
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(language)}
          sx={{ mt: 1 }}
        >
          <MenuItem onClick={() => handleClose("sv")}>
            <Typography
              sx={{ color: language === "sv" ? "#662c9c" : "inherit" }}
            >
              Svenska
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => handleClose("en")}>
            <Typography
              sx={{ color: language === "en" ? "#662c9c" : "inherit" }}
            >
              English
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
