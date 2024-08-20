import LanguageIcon from "@mui/icons-material/Language";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
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
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../context/languageContext";
import { useAppSelector } from "../slices/store";

export default function Header(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { language, setLanguage } = useLanguageContext();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const [isWiggling, setIsWiggling] = useState(false);
  const cart = useAppSelector((state) => state.cartSlice.cart);

  const handleWiggle = () => {
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 2000);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  // const cartItems = useAppSelector((state) => state.cartSlice.cart?.items);
  const isVisible = useAppSelector(
    (state) => state.cartSlice.isCheckVisible as boolean
  );

  useEffect(() => {
    if (isVisible) {
      handleWiggle();
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      setIsWiggling(false);
    }
  }, [isVisible]);

  const getTotalAmountCartItems = () => {
    if (cart) {
      return cart.items.reduce((total, item) => total + item.quantity, 0);
    } else {
      return 0;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: isMobile ? "column" : "row",
        zIndex: 999,
        paddingY: 1,
        position: "sticky",
        top: 0,
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0))", // Gradient som börjar med mörkare svart och fade-out vid 50% ned
        transition: "background-image 0.3s ease", // Övergång för gradienten
        // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Ljusskugga för övergångseffekt
        // backgroundImage: "url('https://i.imgur.com/kFmeAx8.png')",
        //  backgroundColor: "black",
        // transition: "background-color 0.10s ease",
        // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.10)",
        // backgroundColor: "red",
      }}
      component={"header"}
    >
      <Box
        sx={{
          display: "flex",
          paddingY: 2,
          width: "100%",
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          alignItems: "center",
          justifyContent: "space-around",
          // width: isMobile ? "100%" : "auto",
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
          href="/"
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
            <FormattedMessage id="home" />
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
        <Link href="/">
          <img
            src="https://i.imgur.com/IMSL19B.png"
            height="100"
            alt="logo"
          ></img>
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
        {/* <Link
          sx={{
            textDecoration: "none",
            transition: "color 0.3s",
            "&:hover": {
              color: "#4c9173",
            },
          }}
          href="/products"
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
            <FormattedMessage id="products" />
          </Typography>
        </Link> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            marginTop: "-55px",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
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
            <IconButton
              onClick={() => {
                handleWiggle();
                navigate("/cart"); // Navigera till "/cart" samtidigt
              }}
              sx={{
                color: "white",
                backgroundColor: "#662c9c",
                animation: isWiggling
                  ? "wiggle 0.3s ease-in-out infinite"
                  : "none",
                "&:hover": { backgroundColor: "#422a75" },
                borderRadius: "50%",
                "@keyframes wiggle": {
                  "0%, 100%": {
                    transform: "rotate(-5deg)",
                  },
                  "50%": {
                    transform: "rotate(5deg)",
                  },
                },
              }}
            >
              {cart && cart.items.length > 0 ? (
                <Badge badgeContent={getTotalAmountCartItems()} color="success">
                  <ShoppingBagIcon />
                </Badge>
              ) : (
                <ShoppingBagIcon />
              )}
            </IconButton>
            {/* <AnimatedCheckIcon isVisible={isVisible} /> */}
          </Box>
          <Link
            sx={{
              textDecoration: "none",
              transition: "color 0.3s",
              "&:hover": {
                color: "#4c9173",
              },
            }}
            href="/products"
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
              <FormattedMessage id="products" />
            </Typography>
          </Link>
        </Box>
      </Box>

      <Menu
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
      </Menu>
    </Box>
  );
}
