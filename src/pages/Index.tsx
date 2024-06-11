import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Typography, keyframes } from "@mui/material";
import Gallery from "../components/Gallery";

// Keyframes for the animation
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "start",
        marginTop: 2,
        flexGrow: 1,
        minHeight: "100vh",
        // backgroundColor: "red",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 0,
          margin: 0,
          width: "100%",
          alignItems: "start",
          marginTop: 2,
          flexGrow: 1,
          // backgroundColor: "red",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1 / 2,
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: 2,
            paddingLeft: 4,
            borderRadius: 8,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 18,
              letterSpacing: 2,
              marginBottom: 1,
            }}
          >
            Let's talk
          </Typography>
          <div style={{ height: 2, width: 50, backgroundColor: "#896daf" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white", fontSize: 16 }}>
              zeroettab@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white", fontSize: 16 }}>
              0737000820/kkdkd
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Instagram sx={{ color: "white" }} />
            <Typography sx={{ color: "white", fontSize: 16 }}>
              Zeroett's instagram
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: 4,
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", marginBottom: 3 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 2,
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "0s",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: 3,
                  fontWeight: "400",
                  fontSize: 40,
                }}
              >
                Web applications
              </Typography>
              {/* <CheckIcon sx={{ color: "#896daf", fontSize: 45, marginLeft: 1 }} /> */}
            </Box>
            <div
              style={{ height: 2, width: 200, backgroundColor: "#896daf" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "0.2s",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: 2,
                  fontWeight: "300",
                  fontSize: 16,
                  marginTop: 1,
                }}
              >
                We design and build your webpage
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", marginBottom: 3 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 2,
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "0.5s",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: 3,
                  fontWeight: "400",
                  fontSize: 40,
                }}
              >
                Mobile applications
              </Typography>
              {/* <CheckIcon sx={{ color: "#896daf", fontSize: 45, marginLeft: 1 }} /> */}
            </Box>
            <div
              style={{ height: 2, width: 200, backgroundColor: "#896daf" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "0.7s",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: 2,
                  fontWeight: "300",
                  fontSize: 16,
                  marginTop: 1,
                }}
              >
                Building apps for Android and IOS
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 2,
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "1s",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: 3,
                  fontWeight: "400",
                  fontSize: 40,
                }}
              >
                Backend solutions
              </Typography>
              {/* <CheckIcon
              sx={{
                color: "#896daf",
                fontSize: 45,
                marginLeft: 1,
              }}
            /> */}
            </Box>
            <div
              style={{ height: 2, width: 200, backgroundColor: "#896daf" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "1.2s",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: 2,
                  fontWeight: "300",
                  fontSize: 16,
                  marginTop: 1,
                }}
              >
                Robust and scalable backend systems
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Gallery />
    </Box>
  );
}
