import { Button, Grid, Typography, Box, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

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

const TellUsIndex = () => {
  const navigate = useNavigate();

  return (
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
        fontSize: "24px",
        display: "flex",
        minWidth: "100%",
        justifyContent: "center",
        backgroundColor: "#1E1E1E",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        height: "100vh",
        padding: 4,
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
          backgroundColor: "rgba(30, 30, 30, 0.9)",
          borderRadius: 2,
          padding: 4,
          // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
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
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            color: "white",
            letterSpacing: 3,
            marginBottom: { xs: 2, md: 1 },
            fontWeight: "300",
            fontSize: { xs: 35, md: 50 },
            textAlign: { xs: "center", md: "start" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <FormattedMessage id="tell-us" />
        </Typography>
        <Box
          sx={{
            height: 2,
            width: 250,
            backgroundColor: "#6e578a",
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
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
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
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
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
            backgroundColor: "#6e578a",
            "&:hover": {
              backgroundColor: "#422a75",
            },
            marginTop: 2,
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
          padding: 4,
        }}
      >
        {/* <motion.img
          src="https://i.imgur.com/LWnnKCt.png"
          alt="lightbulb"
          height="300px"
          width="300px"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.3))" }}
        /> */}
        <LightbulbIcon sx={{ color: "#a295bd", fontSize: 200 }} />
      </Grid>
    </Grid>
  );
};

export default TellUsIndex;
