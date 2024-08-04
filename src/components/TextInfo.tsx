import { Box, Typography, Link } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useScreenSize } from "../contexts/screenSizeContext";

interface TextInfoProps {
  title: string;
  text: string;
  icon: React.ElementType;
  href: string;
}

const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TextInfo = ({ title, text, icon: Icon, href }: TextInfoProps) => {
  const { isMobile } = useScreenSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75 && top > -windowHeight * 0.25) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

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
    <Link
      href={href}
      underline="none"
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Box
        ref={containerRef}
        component={motion.div}
        animate={controls}
        initial="hidden"
        variants={fadeInAnimation}
        sx={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 3,
          padding: { xs: "16px", md: "32px" },
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 8,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          textAlign: "center",
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        {Icon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 20 }}
          >
            <Icon
              sx={{
                fontSize: isMobile ? 40 : 80,
                marginBottom: 2,
              }}
            />
          </motion.div>
        )}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{
              marginBottom: 1,
              letterSpacing: 2,
              fontWeight: 500,
              fontSize: { xs: 24, md: 36 },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <FormattedMessage id={title} />
          </Typography>
          <Box
            sx={{
              height: 2,
              width: 50,
              backgroundColor: "#896daf",
              margin: "auto",
              marginBottom: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              letterSpacing: 1,
              fontWeight: 300,
              fontSize: 16,
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
            }}
          >
            <FormattedMessage id={text} />
          </Typography>
        </motion.div>
      </Box>
    </Link>
  );
};

export default TextInfo;
