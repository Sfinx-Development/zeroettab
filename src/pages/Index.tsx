import AppsIcon from "@mui/icons-material/Apps";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import { Box, Button, Grid, Typography, keyframes } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import LetsTalk from "../components/LetsTalk";
import TextInfo from "../components/TextInfo";
import ZeroettPresentation from "../components/ZeroettPresentation";
import { useScreenSize } from "../contexts/screenSizeContext";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Index() {
  const navigate = useNavigate();
  const iconsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      if (iconsRef.current) {
        const top = iconsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
      }));
    }
  }, [isVisible, controls]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: 0,
          margin: 0,
          height: "auto",
          width: "100%",
          alignItems: "start",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ZeroettPresentation />
          {!isMobile && <LetsTalk />}

          {/* <Gallery /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextInfo
              title="web-applications"
              text="we-design"
              icon={LanguageIcon}
              href={"/offers"}
            />
            <TextInfo
              title="mobile-applications"
              text="building-apps"
              icon={AppsIcon}
              href={"/offers"}
            />
            <TextInfo
              title="backend-solutions"
              text="robust-and"
              icon={StorageIcon}
              href={"/offers"}
            />
          </Box>
        </Box>
      </Box>
      <Grid
        container
        item
        xs={10}
        md={8}
        lg={6}
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: "row",
          marginBottom: 4,
          minWidth: { xs: "100%", md: "90%" },
          marginLeft: { xs: 0, md: 20 },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "start" },
            flex: 1,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: 2,
            padding: 4,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
            maxWidth: "100%",
            margin: "auto",
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: "0.5s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              letterSpacing: 3,
              marginBottom: { xs: 2, md: 1 },
              fontWeight: "300",
              fontSize: { xs: 35, md: 50 },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <FormattedMessage id="tell-us" />
          </Typography>
          <div
            style={{
              height: 2,
              width: 250,
              backgroundColor: "#896daf",
              marginBottom: 1,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "white",
              letterSpacing: 2,
              marginY: { xs: 2, md: 1 },
              fontWeight: "300",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <FormattedMessage id="we-assist" />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              letterSpacing: 2,
              marginBottom: 1,
              fontWeight: "300",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <FormattedMessage id="tell-us-2" />
          </Typography>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
            variant="contained"
            sx={{
              backgroundColor: "#662c9c",
              "&:hover": {
                backgroundColor: "#422a75",
              },
            }}
          >
            <FormattedMessage id="contact" />
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <motion.img
            src="https://i.imgur.com/LWnnKCt.png"
            alt="lightbulb"
            height="300px"
            width="300px"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
