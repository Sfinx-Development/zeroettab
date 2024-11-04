import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton, styled, TextField, Typography } from "@mui/material";
import { Customer, useCustomerContext } from "../../context/customerContext";
import { Rubrik } from "../Footer";

emailjs.init("C8CxNnxZg6mg-d2tq");

export default function ParallaxContact() {
  const { customer } = useCustomerContext();
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

  const StyledTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      background: "linear-gradient(to right,#E6A08E, #F1B8A9)",
      borderRadius: "50px",
      paddingLeft: "15px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      color: "rgb(37,31,37)",
    },
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(34,32,37,255)",
          zIndex: 2,
          paddingBottom: 10,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ position: "absolute", right: 0 }}>
          <img
            src="https://i.imgur.com/H2Nhixw.png"
            alt="Pink decoration"
            height={"200px"}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 15,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Rubrik
              sx={{
                color: "#F7F7F7",
                fontSize: 30,
                fontWeight: 500,
                textAlign: "left",
                width: { xs: "80%", md: "58%" },
              }}
            >
              Berätta mer!
            </Rubrik>
            <Typography
              sx={{
                color: "rgba(247, 247, 247, 0.9)",
                fontSize: 18,
                fontFamily: "Roboto",
                fontWeight: 200,
                maxWidth: { xs: "80%", md: "58%" },
                textAlign: "left",
                marginTop: 2,
              }}
            >
              Fyll i dina uppgifter och berätta vad det är du vill ha hjälp med
              så kontaktar vi dig så snart vi kan.
            </Typography>
            <Box
              sx={{
                width: { xs: "80%", md: "60%" },
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                paddingTop: { xs: 4, md: 6 },
              }}
            >
              <StyledTextField
                variant="outlined"
                placeholder="Namn"
                fullWidth
              />
              <StyledTextField
                variant="outlined"
                placeholder="Mejladress"
                fullWidth
              />
              <StyledTextField
                variant="outlined"
                placeholder="Telefonnummer"
                fullWidth
              />
              <StyledTextField
                variant="outlined"
                placeholder="Berätta vad vi kan göra för dig"
                fullWidth
                multiline
                rows={5}
                sx={{
                  "& .MuiInputBase-root": {
                    background: "linear-gradient(to right,#E6A08E, #F1B8A9)",
                    borderRadius: "30px",
                    paddingLeft: "15px",
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <IconButton sx={{ display: "flex" }}>
                  <Rubrik sx={{ color: "#F7F7F7", fontSize: 25 }}>
                    Skicka
                  </Rubrik>
                  <ArrowForwardIcon sx={{ color: "#F7F7F7", fontSize: 25 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
