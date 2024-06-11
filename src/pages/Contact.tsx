import { Box, Grid, Typography, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import CompanyForm from "../components/CompanyForm";
import ClientIdeaForm from "../components/CustomerIdeaForm";
import FormStepper from "../components/FormStepper";
import PersonalDataForm from "../components/PersonalDataForm";

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

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        marginTop: 2,
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
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
            Tell us your idea
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
            We assist you in designing, developing, and enhancing your
            application.
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
            Tell us your thoughts and let's talk!
          </Typography>
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
      <FormStepper
        steps={[
          { title: "Uppgifter", form: PersonalDataForm },
          { title: "Företag eller privatperson", form: CompanyForm },
          { title: "Beskriv din idé", form: ClientIdeaForm },
        ]}
      />
    </Box>
  );
}
