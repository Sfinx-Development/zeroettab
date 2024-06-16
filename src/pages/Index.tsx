import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, Grid, Link, Typography, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: 0,
          margin: 0,
          width: "100%",
          alignItems: "start",
          marginTop: 2,
          flexGrow: 1,
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
            marginBottom: { xs: 4, md: 0 },
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
            <FormattedMessage id="lets-talk" />
          </Typography>
          <div style={{ height: 2, width: 50, backgroundColor: "#896daf" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ color: "white" }} />
            <a
              href="mailto:zeroettab@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Typography sx={{ color: "white", fontSize: 16 }}>
                zeroettab@gmail.com
              </Typography>
            </a>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ color: "white" }} />
            <a
              href="tel:0737000820"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography sx={{ color: "white", fontSize: 16 }}>
                0737000820
              </Typography>
            </a>
            <a
              href="tel:0723372475"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography sx={{ color: "white", fontSize: 16 }}>
                / 0723372475
              </Typography>
            </a>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Instagram sx={{ color: "white" }} />
            <Link
              href="https://www.instagram.com/zeroettab"
              sx={{ textDecoration: "none" }}
            >
              <Typography sx={{ color: "white", fontSize: 16 }}>
                Zeroett's instagram
              </Typography>
            </Link>
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
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 3,
            }}
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
                component="h2"
                sx={{
                  color: "white",
                  letterSpacing: 3,
                  marginBottom: { xs: 2, md: 1 },
                  fontWeight: "300",
                  fontSize: { xs: 35, md: 50 },
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                ZEROETT AB
              </Typography>
            </Box>
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
                component={"h3"}
                sx={{
                  color: "white",
                  letterSpacing: 2,
                  fontWeight: "300",
                  fontSize: 20,
                  marginTop: 1,
                  maxWidth: { xs: "auto", md: "80%" },
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                }}
              >
                Zeroett AB erbjuder mjukvarulösningar, skräddarsydda hemsidor,
                e-tjänster, mobilappar, backend-utveckling och databashantering.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 3,
            }}
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
                variant="h2"
                sx={{
                  color: "white",
                  letterSpacing: 3,
                  marginBottom: { xs: 2, md: 1 },
                  fontWeight: "400",
                  fontSize: { xs: 35, md: 50 },
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <FormattedMessage id="web-applications" />
              </Typography>
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
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                }}
              >
                <FormattedMessage id="we-design" />
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
                animationDelay: "0.9s",
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
                  fontWeight: "400",
                  fontSize: { xs: 35, md: 50 },
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <FormattedMessage id="mobile-applications" />
              </Typography>
            </Box>
            <div
              style={{ height: 2, width: 200, backgroundColor: "#896daf" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "1.1s",
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
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                }}
              >
                <FormattedMessage id="building-apps" />
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
                animationDelay: "1.3s",
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
                  fontWeight: "400",
                  fontSize: { xs: 35, md: 50 },
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <FormattedMessage id="backend-solutions" />
              </Typography>
            </Box>
            <div
              style={{ height: 2, width: 200, backgroundColor: "#896daf" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: "1.5s",
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
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                }}
              >
                <FormattedMessage id="robust-and" />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Gallery />
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
            borderRadius: 8,
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
            Kontakt
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
