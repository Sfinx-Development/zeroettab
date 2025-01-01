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

export default function Info() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
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
          flexDirection: "row",
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
        {/* Section 1 */}
        <Box sx={{ flex: 1, padding: 2, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              letterSpacing: 1.5,
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Have Ideas?
            <Typography
              variant="h4"
              component="span"
              sx={{
                color: "#896daf",
                marginLeft: 1,
                letterSpacing: 1.5,
                fontWeight: "bold",
              }}
            >
              We've Got the Solutions!
            </Typography>
          </Typography>
          <img
            src={"https://i.imgur.com/ma2U0SC.png"}
            alt="Message icon"
            style={{
              width: "100%",
              maxWidth: "230px",
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

        {/* Section 2 */}
        <Box sx={{ flex: 1, padding: 2, textAlign: "center" }}>
          <img
            src={"https://i.imgur.com/aSAxIrM.png"}
            alt="Computer icon"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: 8,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <Typography
            variant="h4"
            sx={{
              color: "white",
              letterSpacing: 1.5,
              fontWeight: "bold",
              marginTop: 2,
            }}
          >
            We Develop
            <Typography
              variant="h4"
              component="span"
              sx={{
                color: "#896daf",
                marginX: 1,
                letterSpacing: 1.5,
                fontWeight: "bold",
              }}
            >
              Customized Solutions
            </Typography>
            for You
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
