import { Alert, AlertColor, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Customer, useCustomerContext } from "../context/customerContext";

interface StepData {
  title: string;
  form: React.FC;
}

interface Props {
  steps: StepData[];
}

emailjs.init("C8CxNnxZg6mg-d2tq");

export default function FormStepper(props: Props) {
  const { steps } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const { customer } = useCustomerContext();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    React.useState<AlertColor>("success");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      setCompleted(true);
      // sendEmail(customer);
      sendEmailWithLink(customer);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const sendEmailWithLink = (customer: Customer) => {
    const customerName = `Kundens namn : ${customer.name}`;
    const customerEmail = `Kundens email : ${customer.email}`;
    const customerPhone = `Kundens email : ${customer.phone}`;
    const customerAddress = `Kundens adress: ${customer.address} ${customer.zipcode} ${customer.city}`;
    const customerPurpose = `Syfte med applikationen: ${customer.purposeApp}`;
    const customerApp = `Typ av appplikation: ${customer.typeOfApp}`;
    const customerTargetGroup = `Målgrupp som vi riktar in oss på: ${customer.targetGroup}`;
    const customerBudget = `Budget: ${customer.budgetDescription}`;
    const customerExtra = `Övrigt: ${customer.extraDescription}`;

    const isCompany = `Är företag: ${customer.isCompany ? "ja" : "nej"}`;
    let companyName = "";
    let companyDescription = "";
    if (isCompany) {
      companyName = `Företagets namn: ${customer.companyName}`;
      companyDescription = `Företagets beskrivning: ${customer.companyDescription}`;
    }
    const body = `${customerName}\n${customerEmail}\n${customerPhone}\n${customerAddress}\n${customerPurpose}\n${customerTargetGroup}\n${customerApp}\n${customerBudget}\n${customerExtra}\n${isCompany}\n${companyName}\n${companyDescription}`;

    const templateParams = {
      to_name: "Zeroett",
      from_name: customer.name,
      message: `Meddelande: ${body}`,
    };

    emailjs
      .send("service_f1l2auv", "template_2f6lq5o", templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setSnackbarSeverity("success");
        setSnackbarMessage("Förfrågan skickad!");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "Något gick fel när förfrågan skickades. Försök igen."
        );
        setOpenSnackbar(true);
      });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const FormComponent = steps[activeStep].form;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {!completed ? (
        <div>
          <Stepper
            activeStep={activeStep}
            sx={{ color: "white !important" }}
            alternativeLabel
          >
            {steps.map((step) => (
              <Step
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#28316b", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "white",
                    },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "common.white",
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#28316b",
                  },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "white",
                  },
                  "& .MuiStepLabel-root .Mui-completed .MuiStepIcon-text": {
                    color: "white",
                  },
                }}
                key={step.title}
              >
                <StepLabel
                  sx={{
                    color: "red",
                  }}
                >
                  {<FormattedMessage id={step.title} />}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography component="div" color="white" sx={{ mt: 2 }}>
                  <Typography variant="h6" color="white" gutterBottom>
                    Alla steg är klara
                  </Typography>
                  <Typography variant="body1" color="white">
                    Visa någon form av avslutningsmeddelande här.
                  </Typography>
                </Typography>
              </div>
            ) : (
              <div>
                <FormComponent />
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, fontSize: 15, color: "white" }}
                  >
                    <FormattedMessage id="previous" />
                  </Button>
                  <Button
                    onClick={handleNext}
                    sx={{ fontSize: 15, color: "white" }}
                  >
                    {activeStep === steps.length - 1 ? (
                      <FormattedMessage id="done" />
                    ) : (
                      <FormattedMessage id="next" />
                    )}
                  </Button>
                </Box>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "white",
          }}
        >
          <Typography variant="h4" sx={{ mb: 6 }}>
            Vi hör av oss till {customer.email} inom 3 dagar
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h2" color="white">
              Gå till Zeroett
            </Typography>
          </Link>
        </Box>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
