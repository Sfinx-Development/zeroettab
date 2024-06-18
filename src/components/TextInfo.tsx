import { Box, Typography, keyframes } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useScreenSize } from "../contexts/screenSizeContext";

interface TextInfoProps {
  title: string;
  text: string;
  icon: React.ElementType;
}

const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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

const TextInfo = ({ title, text, icon: Icon }: TextInfoProps) => {
  const { isMobile } = useScreenSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Check if the element is in the viewport
        if (top < windowHeight * 0.75 && top > -windowHeight * 0.25) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Call handleScroll initially and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 },
      }));
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isVisible, controls]);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "row",
        minWidth: "100%",
        justifyContent: isMobile ? "center" : "start",
        marginLeft: { xs: 0, md: 0 },
        marginBottom: 3,
        alignItems: "flex-start",
      }}
    >
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 20 }}
        style={{ marginBottom: 20 }}
      >
        {Icon && (
          <Icon
            sx={{
              fontSize: isMobile ? 30 : 60,
              color: "white",
              marginTop: isMobile ? 2.5 : 4,
              paddingX: 2,
            }}
          />
        )}
      </motion.div>
      <motion.div
        variants={fadeInAnimation}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            width: "100%",
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2,
              opacity: 0,
              width: "100%",
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: "0.5s",
              animationFillMode: "forwards",
            }}
          >
            <Typography
              component={"h3"}
              sx={{
                color: "white",
                letterSpacing: 3,
                marginBottom: { xs: 2, md: 1 },
                fontWeight: "300",
                fontSize: { xs: 26, md: 55 },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <FormattedMessage id={title} />
            </Typography>
          </Box>
          <div style={{ height: 2, width: 200, backgroundColor: "#896daf" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              opacity: 0,
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: "0.7s",
              animationFillMode: "forwards",
            }}
          >
            <Typography
              sx={{
                color: "white",
                letterSpacing: 2,
                fontWeight: "300",
                fontSize: 16,
                marginTop: 1,
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
              }}
            >
              <FormattedMessage id={text} />
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TextInfo;
