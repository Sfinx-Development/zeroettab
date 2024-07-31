import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WorkIcon from "@mui/icons-material/Work";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useScreenSize } from "../contexts/screenSizeContext";
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
    {
      label: "contact",
      href: "/contact",
      icon: <ContactMailIcon sx={{ fontSize: 20 }} />,
    },
    { label: "projects", href: "/projects", icon: <WorkIcon /> },
    { label: "offers", href: "/offers", icon: <LocalOfferIcon /> },
    { label: "products", href: "/products", icon: <StorefrontIcon /> },
  ];
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        width: "100%",
        // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        flexDirection: "column",
        zindex: 1000,
        position: "relative",
        paddingTop: 2,
        // backgroundColor: "red",
        // position: "sticky",
        // top: 0,
        // backgroundColor: "black"
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
          justifyContent: isMobile ? "flex-start" : "flex-start",
          width: isMobile ? "100%" : "auto",
          marginLeft: isMobile ? 0 : 10,
        }}
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
          <Link href="/" sx={{ textDecoration: "none" }}>
            <img
              src="https://i.imgur.com/5Fk6tu4.png"
              alt="Zeroett"
              width={150}
            />
          </Link>
        </Box>

        <Box sx={{ display: "flex" }}>
          <IconButton
            onClick={() => navigate("/cart")}
            sx={{
              color: "white",
              backgroundColor: "#662c9c",
              "&:hover": { backgroundColor: "#422a75" },
              borderRadius: "50%",
              // marginX: 1,
            }}
          >
            <ShoppingBagIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
        <IconButton
          onClick={handleToggleMenu}
          sx={{
            color: "white",
            backgroundColor: "#662c9c",
            "&:hover": { backgroundColor: "#422a75" },
            borderRadius: "50%",
            marginX: 1,
          }}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
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
                    href={link.href}
                    sx={{
                      textDecoration: "none",
                      display: "flex",
                      paddingTop: 3,
                      alignItems: "center",

                      // paddingBottom: 6,
                    }}
                    onClick={handleCloseMenu}
                  >
                    <IconButton
                      sx={{
                        color: "white",
                        backgroundColor: "#662c9c",
                        "&:hover": { backgroundColor: "#422a75" },
                        borderRadius: "50%",
                      }}
                    >
                      {link.icon}
                    </IconButton>

                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 20,
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
      <LetsTalkPhone />
    </Box>
  );
}
