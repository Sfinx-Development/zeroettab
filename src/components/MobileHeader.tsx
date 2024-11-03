import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MenuIcon from "@mui/icons-material/Menu";
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
import { FormattedMessage } from "react-intl";
import { useScreenSize } from "../contexts/screenSizeContext";
import SvgSmallImage from "./SvgSmallZeroett";

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
    { label: "about", href: "/about", icon: <InfoIcon /> },
    { label: "offers", href: "/offers", icon: <LocalOfferIcon /> },
    { label: "projects", href: "/projects", icon: <WorkIcon /> },
    {
      label: "contact",
      href: "/contact",
      icon: <ContactMailIcon sx={{ fontSize: 20 }} />,
    },
  ];

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
        backgroundColor: "#F7F7F7",
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
            justifyContent: isMobile ? "flex-start" : "flex-start",
            width: isMobile ? "100%" : "auto",
            marginLeft: isMobile ? 0 : 10,
          }}
        >
          <Link href="/" sx={{ textDecoration: "none", marginX: 2 }}>
            <SvgSmallImage />
          </Link>
        </Box>

        <IconButton
          onClick={handleToggleMenu}
          sx={{
            color: "black",
            borderRadius: "50%",
            marginX: 1,
          }}
        >
          <MenuIcon sx={{ fontSize: 25 }} />
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
              backgroundColor: "#F7F7F7",
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
                    }}
                    onClick={handleCloseMenu}
                  >
                    <IconButton
                      sx={{
                        color: "rgb(37,31,37)",
                        borderRadius: "50%",
                      }}
                    >
                      {link.icon}
                    </IconButton>

                    <Typography
                      sx={{
                        color: "rgb(37,31,37)",
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
      {/* <LetsTalkPhone /> */}
    </Box>
  );
}
