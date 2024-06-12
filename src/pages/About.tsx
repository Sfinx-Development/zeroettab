import { Box, Typography, keyframes } from "@mui/material";

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

export default function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 8,
          padding: 4,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          maxWidth: "80%",
          margin: "auto",
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.5s",
          animationFillMode: "forwards",
          opacity: 0,
        }}
      >
        <Box sx={{ flex: 1, padding: 2, textAlign: "center" }}>
          <img
            src={"https://i.imgur.com/9BMENE8.jpeg"}
            alt="Team"
            style={{
              width: "100%",
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
            variant="h4"
            sx={{
              color: "white",
              letterSpacing: 1.5,
              fontWeight: "bold",
              display: "inline",
            }}
          >
            Our team consists of two full-stack
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#896daf",
              marginLeft: 1,
              letterSpacing: 1.5,
              fontWeight: "bold",
              display: "inline",
            }}
          >
            developers
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 2, lineHeight: 1.8, color: "white" }}
          >
            We focus on creating strong, smart, and secure systems for our
            customers. Our team consists of two full-stack developers with
            additional expertise in C#, JAVA, JavaScript, and TypeScript. We use
            frameworks like React, Svelte, Angular, Grails, and .NET for both
            small and large systems. As full-stack developers, we take care of
            all your software needs - from websites and web shops to mobile
            applications and features in already established systems.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 3,
              color: "#896daf",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            - Angelina & Elina
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}