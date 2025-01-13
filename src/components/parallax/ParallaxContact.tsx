import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Alert,
  AlertColor,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Rubrik } from "../Footer";

emailjs.init("C8CxNnxZg6mg-d2tq");

export default function ParallaxContact() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    React.useState<AlertColor>("success");
  const [localName, setLocalName] = useState("");
  const [localMail, setLocalMail] = useState("");
  const [localPhone, setLocalPhone] = useState("");
  const [localDesc, setLocalDesc] = useState("");
  const [emailUnvalid, setEmailUnvalid] = useState(false);
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1)); // Ta bort '#' och hitta elementet
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Elementet med id "${hash.slice(1)}" hittades inte.`);
      }
    }
  }, [location]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyPolicyChecked(event.target.checked);
  };

  const sendEmailWithLink = () => {
    const emailIsValid = localMail.includes("@") && localMail.includes(".");
    if (emailIsValid) {
      const customerName = `Kundens namn : ${localName}`;
      const customerEmail = `Kundens email : ${localMail}`;
      const customerPhone = `Kundens telefon : ${localPhone}`;
      const customerExtra = `Beskrivning: ${localDesc}`;

      const body = `${customerName}\n${customerEmail}\n${customerPhone}\n${customerExtra}`;

      const templateParams = {
        to_name: "Zeroett",
        from_name: localName,
        message: `Meddelande: ${body}`,
      };

      emailjs
        .send("service_f1l2auv", "template_2f6lq5o", templateParams)
        .then((response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
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
    } else {
      setEmailUnvalid(true);
    }
  };

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
        <Box
          sx={{
            position: "absolute",
            right: 0,
            height: { xs: 150, md: 250, xl: 300 },
            width: "auto", // Säkerställer att bredden anpassas efter innehållet
            overflow: "hidden", // Förhindrar att bilden överskrider boxen
          }}
        >
          <img
            src="https://i.imgur.com/H2Nhixw.png"
            alt="Pink decoration"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Ser till att hela bilden syns inom ramen utan att sträckas
            }}
          />
        </Box>

        <Box
          id="form"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: { xs: 15, xl: 35 },
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
                fontSize: { xs: 30, xl: 40 },
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
                fontSize: { xs: 18, xl: 25 },
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
                gap: { xs: 2, xl: 4 },
                paddingTop: { xs: 4, md: 6 },
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Namn"
                fullWidth
                value={localName}
                onChange={(e) => {
                  setLocalName(e.target.value);
                }}
                InputProps={{
                  style: {
                    background:
                      "linear-gradient(to right, #D08B7C, #E6A08E, #F1B8A9)",
                    borderRadius: "50px",
                    paddingLeft: "15px",
                    color: "rgb(37,31,37)",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Mejladress"
                fullWidth
                error={emailUnvalid}
                helperText={emailUnvalid ? "Ange en giltig e-postadress" : ""}
                value={localMail}
                onChange={(e) => {
                  setLocalMail(e.target.value);
                }}
                InputProps={{
                  style: {
                    background:
                      "linear-gradient(to right, #D08B7C, #E6A08E, #F1B8A9)",
                    borderRadius: "50px",
                    paddingLeft: "15px",
                    color: "rgb(37,31,37)",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Telefonnummer"
                fullWidth
                value={localPhone}
                onChange={(e) => {
                  setLocalPhone(e.target.value);
                }}
                InputProps={{
                  style: {
                    background:
                      "linear-gradient(to right, #D08B7C, #E6A08E, #F1B8A9)",
                    borderRadius: "50px",
                    paddingLeft: "15px",
                    color: "rgb(37,31,37)",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Berätta vad vi kan göra för dig"
                fullWidth
                value={localDesc}
                multiline
                rows={5}
                InputProps={{
                  style: {
                    background:
                      "linear-gradient(to right, #D08B7C, #E6A08E, #F1B8A9)",
                    borderRadius: "30px",
                    paddingLeft: "15px",
                    color: "rgb(37,31,37)",
                  },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "30px",
                    paddingLeft: "15px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent", // Inaktiverar standardgränsen
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // Inaktiverar gränsen vid hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // Tar bort blåa ramen vid fokus
                    },
                    "&.Mui-focused": {
                      boxShadow: "none", // Tar bort den blå skuggan vid fokus
                    },
                  },
                }}
                onChange={(e) => {
                  setLocalDesc(e.target.value);
                }}
              />
              <FormControlLabel
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "110%",
                  gap: 1,
                }}
                control={
                  <Checkbox
                    required
                    sx={{
                      color: "#F7F7F7",
                      "&.Mui-checked": {
                        color: "#F7F7F7",
                      },
                    }}
                    checked={privacyPolicyChecked}
                    onChange={handleCheckboxChange}
                  />
                }
                label={
                  <Typography sx={{ color: "#F7F7F7" }}>
                    Jag samtycker till att Zeroett AB behandlar mina
                    personuppgifter i enlighet med vår{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#E6A08E" }}
                    >
                      integritetspolicy
                    </a>
                    .
                  </Typography>
                }
              />
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <IconButton
                  aria-label="Skicka email"
                  sx={{ display: "flex" }}
                  disabled={!privacyPolicyChecked}
                  onClick={() => {
                    sendEmailWithLink();
                  }}
                >
                  <Rubrik
                    sx={{
                      color: !privacyPolicyChecked
                        ? "rgba(255,255,255,0.5)"
                        : "#F7F7F7",
                      fontSize: { xs: 25, xl: 35 },
                    }}
                  >
                    Skicka
                  </Rubrik>
                  <ArrowForwardIcon
                    sx={{
                      color: !privacyPolicyChecked
                        ? "rgba(255,255,255,0.5)"
                        : "#F7F7F7",
                      fontSize: { xs: 25, xl: 35 },
                    }}
                  />
                </IconButton>
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
