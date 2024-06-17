import { keyframes } from "@emotion/react";
import { Box, Typography } from "@mui/material";

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
export default function ZeroettPresentation() {
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
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: 2,
          padding: 4,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          margin: "auto",
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.5s",
          animationFillMode: "forwards",
          opacity: 0,
          zIndex: 2,
        }}
      >
        <Box sx={{ flex: 1, padding: 2, textAlign: "center" }}>
          <video
            src={"https://i.imgur.com/K3EVOyA.mp4"}
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 8,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Box>
        <Box
          sx={{ flex: 1, padding: 2, textAlign: { xs: "center", md: "left" } }}
        >
          <Typography
            component={"h1"}
            sx={{
              color: "white",
              letterSpacing: 3,
              fontWeight: "300",
              display: "inline",
              fontSize: { xs: 40, md: 50 },
            }}
          >
            ZEROETT AB
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 2, lineHeight: 1.8, color: "white" }}
          >
            Zeroett AB erbjuder mjukvarulösningar, skräddarsydda hemsidor,
            e-tjänster, mobilappar, backend-utveckling och databashantering.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
