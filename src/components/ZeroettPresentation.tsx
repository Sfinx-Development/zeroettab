import { keyframes } from "@emotion/react";
import { Box, Link, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
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

const scaleUp = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

export default function ZeroettPresentation() {
  const { isMobile } = useScreenSize();
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        minHeight: 400,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        ref={logoRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: 2,
          flex: 1,
          padding: { xs: 0, md: 4 },
          margin: "auto",
          animation: `${fadeIn} 1s ease-out, ${scaleUp} 1s ease-out`,
          animationDelay: "0.5s",
          animationFillMode: "forwards",
          opacity: 0,
          zIndex: 2,
          "&.animate": {
            opacity: 1,
            animation: `${fadeIn} 1s ease-out, ${scaleUp} 1s ease-out`,
          },
        }}
      >
        <Box
          sx={{ flex: 1, padding: 2, textAlign: { xs: "center", md: "left" } }}
        >
          <Box
            sx={{
              paddingY: 2,
              paddingX: { xs: 0, md: 0 },
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
                width={isMobile ? 350 : 600}
                style={{ marginBottom: isMobile ? 16 : 0 }}
              />
            </Link>
          </Box>
          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              marginLeft: 3,
              lineHeight: 1.8,
              color: "white",
              fontWeight: "300",
            }}
          >
            <FormattedMessage id="zeroett-offers" />
          </Typography>
        </Box>
        {/* 
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flex: 1,
            marginLeft: isMobile ? 0 : 0,
            marginTop: isMobile ? 4 : 0,
            width: "100%",
            height: "auto",
          }}
        >
          {[1, 2, 3].map((num, index) => (
            <Box
              key={index}
              sx={{
                animation: `${slideIn} 1s ease-out`,
                animationDelay: `${0.5 + index * 0.3}s`,
                opacity: 0,
                animationFillMode: "forwards",
                zIndex: 3 - index,
                marginLeft: index > 0 ? -20 : 0,
                "&.animate": {
                  opacity: 1,
                },
              }}
              className="photo-box"
            >
              <img
                src={getPhoto(num)}
                alt={`Photo ${num}`}
                style={{
                  width: isMobile ? 100 : 200,
                  height: isMobile ? 100 : 120,
                  borderRadius: 8,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.5s ease",
                  transform: `translateY(${index % 2 === 0 ? 10 : -10}px)`,
                }}
              />
            </Box>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}
