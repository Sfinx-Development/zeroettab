import { Box } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutUsIndex from "../components/AboutUsIndex";
import TellUsIndex from "../components/TellUsIndex";
import WebsitePresentation from "../components/WebsitePresent";
import ZeroettPresentation from "../components/ZeroettPresentation";

export default function Index() {
  const iconsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

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
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#1E1E1E",
          color: "white",
          margin: 0,
          width: "100%",
          textAlign: "center",
        }}
        component={"h1"}
      >
        <img
          src="https://i.imgur.com/5Fk6tu4.png"
          height="150"
          alt="logo"
        ></img>
      </Box>
      {/* {!isMobile && <LetsTalk />} */}

      <ZeroettPresentation />
      <AboutUsIndex />
      <WebsitePresentation />
      {/* <WebsiteImage />
'      <MobilePresentation />
      <MobileImage />
      <BackendPresentation />' */}
      {/* <BackendImage /> */}
      {/* <Gallery />
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
        />
        <TextInfo
          title="mobile-applications"
          text="building-apps"
          icon={AppsIcon}
        />
        <TextInfo
          title="backend-solutions"
          text="robust-and"
          icon={StorageIcon}
        />
      </Box> */}

      <TellUsIndex />
    </Box>
  );
}
