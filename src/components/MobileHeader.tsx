import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScreenSize } from "../contexts/screenSizeContext";
import { FormattedMessage } from "react-intl";
import LetsTalkPhone from "./LetsTalkPhone";

export default function CustomHeader2(): JSX.Element {
  const theme = useTheme();
  const { isMobile } = useScreenSize();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseMenu = () => {
    setOpenDrawer(false);
  };

  const links = [
    { label: "home", href: "/", icon: <HomeIcon /> },
    { label: "about", href: "/about", icon: <InfoIcon /> },
    { label: "contact", href: "/contact", icon: <ContactMailIcon /> },
    { label: "projects", href: "/projects", icon: <WorkIcon /> },
    { label: "offers", href: "/offers", icon: <LocalOfferIcon /> },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        flexDirection: "column",
        position: "relative",
      }}
      component={"header"}
    >
      <Box
        sx={{
          paddingY: 0,
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-start",
          width: isMobile ? "100%" : "auto",
          marginLeft: isMobile ? 0 : 10,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://i.imgur.com/5Fk6tu4.png"
            alt="Zeroett"
            width={180}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          paddingY: 0,
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "flex-start",
          width: isMobile ? "100%" : "auto",
          marginLeft: isMobile ? 0 : 10,
        }}
      >
        <LetsTalkPhone />
        <IconButton onClick={handleToggleMenu}>
          <MenuIcon sx={{ color: "white", fontSize: 40 }} />
        </IconButton>

        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleCloseMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 220,
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          <List
            sx={{
              paddingLeft: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              height: "100%",
            }}
          >
            {links.map((link, index) => (
              <Slide
                key={link.label}
                direction="right"
                in={openDrawer}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ListItem
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f3f3f3",
                    },
                    marginBottom: 2,
                  }}
                >
                  <Link
                    to={link.href}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      paddingTop: 6,
                      alignItems: "center",
                      paddingBottom: 6,
                      color: "#896daf",
                    }}
                    onClick={handleCloseMenu}
                  >
                    {link.icon}
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 24,
                        letterSpacing: 2,
                        fontWeight: "300",
                        marginLeft: 2,
                      }}
                    >
                      <FormattedMessage id={link.label} />
                    </Typography>
                  </Link>
                </ListItem>
              </Slide>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}
