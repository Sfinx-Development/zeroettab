import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rubrik } from "../Footer";

export default function ParallaxServices() {
  const navigation = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Skrolla till rätt sektion när hash ändras
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          paddingBottom: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 4,
            marginTop: { xs: 5, md: 12 },
            width: "70%",
            backgroundColor: "#F7F7F7",
            borderRadius: 6,
          }}
          id="frontend"
        >
          <Rubrik
            sx={{
              color: "rgb(37,31,37)",
              fontSize: { xs: 20, md: 25 },
              fontWeight: 800,
              display: "flex",
              alignItems: { xs: "left", md: "center" },
              justifyContent: "left",
              width: "80%",
              textAlign: "left",
            }}
          >
            Hemsidor
          </Rubrik>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            Behöver du en ny hemsida för ditt företag? Eller varför inte en sida
            för eventet, Save the date eller 50-årsfesten?
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li>
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Mobilresponsivt /
              enhetsanpassat
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> SEO för
              tillgänglighet på webben
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Design och
              funktioner efter dina önskemål och behov
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Möjlighet till
              vidareutveckling av tjänst
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Möjlighet till
              statistik månadsvis
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Support
            </li>
          </Typography>
          <Box
            sx={{
              width: "80%",
              alignItems: "start",
              display: "flex",
              marginTop: 2,
            }}
          >
            <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <Rubrik>Engångskonstnad från 8000 kr</Rubrik>
              <Rubrik sx={{ fontSize: 14 }}>
                Månadskostnad från 350 kr/mån
              </Rubrik>
              <Typography
                sx={{
                  color: "rgb(37,31,37)",
                  fontSize: 14,
                  fontFamily: "Roboto",
                  fontWeight: 200,
                }}
              >
                Hemsida med undersidor
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <Rubrik>Från 500 kr</Rubrik>
              <Typography
                sx={{
                  color: "rgb(37,31,37)",
                  fontSize: 14,
                  fontFamily: "Roboto",
                  fontWeight: 200,
                }}
              >
                Informationssida utan vald domän.
              </Typography>
              <Typography
                sx={{
                  color: "rgb(37,31,37)",
                  fontSize: 14,
                  fontFamily: "Roboto",
                  fontWeight: 200,
                }}
              >
                Idag är det fleratalet som väljer att skicka sina inbjudningar
                via digitala tjänster. Vi bygger din inbjuadn/informationssida.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "end",
              paddingRight: 4,
            }}
          >
            <IconButton
              sx={{ display: "flex", width: "100%", justifyContent: "end" }}
              onClick={() => {
                navigation("/contact");
              }}
            >
              <Rubrik sx={{ color: "rgb(37,31,37)", fontSize: 20 }}>
                Kontakt
              </Rubrik>
              <ArrowForwardIcon sx={{ color: "rgb(37,31,37)", fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 4,
            width: "70%",
            backgroundColor: "rgba(229,186,179,1)",
            borderRadius: 6,
            marginTop: 6,
          }}
        >
          <Rubrik
            sx={{
              color: "rgb(37,31,37)",
              fontSize: { xs: 20, md: 25 },
              fontWeight: 800,
              display: "flex",
              alignItems: { xs: "left", md: "center" },
              justifyContent: "left",
              width: "80%",
              textAlign: "left",
            }}
          >
            Webbshoppar
          </Rubrik>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            Behöver du en webbshop med betalningsintegration och en admin-vy för
            att hantera varor och produktinformation?
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li>
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Mobilresponsivt /
              enhetsanpassat
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Admin-login/vy för
              att hantera produkter så dom du vill ha det
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />{" "}
              Betalningsintegration
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> SEO för
              tillgänglighet på webben
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Design och
              funktioner efter dina önskemål och behov
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Möjlighet till
              statistik månadsvis
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Support
            </li>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "start",
              width: "80%",
              marginTop: 2,
            }}
          >
            <Rubrik>Från 30.000 kr</Rubrik>
            <Rubrik sx={{ fontSize: 14 }}>Månadskostnad från 800 kr/mån</Rubrik>
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "end",
              paddingRight: 4,
            }}
          >
            <IconButton
              sx={{ display: "flex", width: "100%", justifyContent: "end" }}
              onClick={() => {
                navigation("/contact");
              }}
            >
              <Rubrik sx={{ color: "rgb(37,31,37)", fontSize: 20 }}>
                Kontakt
              </Rubrik>
              <ArrowForwardIcon sx={{ color: "rgb(37,31,37)", fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 4,
            width: "70%",
            backgroundColor: "rgba(240,231,226,1)",
            borderRadius: 6,
            marginTop: 6,
          }}
          id="fullstack"
        >
          <Rubrik
            sx={{
              color: "rgb(37,31,37)",
              fontSize: { xs: 20, md: 25 },
              fontWeight: 800,
              display: "flex",
              alignItems: { xs: "left", md: "center" },
              justifyContent: "left",
              width: "80%",
              textAlign: "left",
            }}
          >
            Mobilapplikationer
          </Rubrik>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            Har du en ny idé för en mobilapp som du tänkt länge på? Eller kanske
            vill du ha din webbshop eller e-tjänst på mobilen?
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Plattform-specifik
              utveckling
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Användarvänliga
              gränssnitt
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Design och
              funktioner efter dina önskemål och behov
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Integration med
              tredjepartstjänster
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Regelbundna
              uppdateringar och underhåll
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Support
            </li>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "start",
              width: "80%",
              marginTop: 2,
            }}
          >
            <Rubrik>Från 50.000 kr</Rubrik>
            <Rubrik sx={{ fontSize: 14 }}>Månadskostnad från 500 kr/mån</Rubrik>
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "end",
              paddingRight: 4,
            }}
          >
            <IconButton
              sx={{ display: "flex", width: "100%", justifyContent: "end" }}
              onClick={() => {
                navigation("/contact");
              }}
            >
              <Rubrik sx={{ color: "rgb(37,31,37)", fontSize: 20 }}>
                Kontakt
              </Rubrik>
              <ArrowForwardIcon sx={{ color: "rgb(37,31,37)", fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "70%",
            paddingTop: 4,
            backgroundColor: "#F7F7F7",
            borderRadius: 6,
            marginTop: 6,
          }}
        >
          <Rubrik
            sx={{
              color: "rgb(37,31,37)",
              fontSize: { xs: 20, md: 25 },
              fontWeight: 800,
              display: "flex",
              alignItems: { xs: "left", md: "center" },
              justifyContent: "left",
              width: "80%",
              textAlign: "left",
            }}
          >
            E-tjänster
          </Rubrik>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            Vill du erbjuda dina kunder en digital tjänst, som bokning av möten,
            registrering av intresseanmälningar, eller ansökningar online?
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Byggd för
              skalbarhet och prestanda
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Design och
              funktioner efter dina önskemål och behov
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Integration med
              frontend och tredjepartstjänster
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Regelbunden
              övervakning och underhåll
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Anpassningsbara
              lösningar för specifika behov
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Support
            </li>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "start",
              width: "80%",
              marginTop: 2,
            }}
          >
            <Rubrik>Från 50.000 kr</Rubrik>
            <Rubrik sx={{ fontSize: 14 }}>Månadskostnad från 800 kr/mån</Rubrik>
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "end",
              paddingRight: 4,
            }}
          >
            <IconButton
              sx={{ display: "flex", width: "100%", justifyContent: "end" }}
              onClick={() => {
                navigation("/contact");
              }}
            >
              <Rubrik sx={{ color: "rgb(37,31,37)", fontSize: 20 }}>
                Kontakt
              </Rubrik>
              <ArrowForwardIcon sx={{ color: "rgb(37,31,37)", fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "70%",
            paddingTop: 4,
            backgroundColor: "rgba(229,186,179,1)",
            borderRadius: 6,
            marginTop: 6,
          }}
          id="backend"
        >
          <Rubrik
            sx={{
              color: "rgb(37,31,37)",
              fontSize: { xs: 20, md: 25 },
              fontWeight: 800,
              display: "flex",
              alignItems: { xs: "left", md: "center" },
              justifyContent: "left",
              width: "80%",
              textAlign: "left",
            }}
          >
            API och databaslösningar
          </Rubrik>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            Behöver du en lösning för att integrera din webbshop med ett externt
            lager- eller betalsystem? Eller hantera stora mängder kunddata på
            ett effektivt sätt?
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "rgb(37,31,37)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              width: "80%",
              textAlign: "left",
              marginTop: 1,
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Byggd för
              skalbarhet och prestanda
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Regelbunden
              övervakning och underhåll
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Anpassningsbara
              lösningar för specifika behov
            </li>
            <li>
              {" "}
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Support
            </li>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "start",
              width: "80%",
              marginTop: 2,
            }}
          >
            <Rubrik sx={{ fontSize: 14 }}>Pris efter offertförfrågan</Rubrik>
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "end",
              paddingRight: 4,
            }}
          >
            <IconButton
              sx={{ display: "flex", width: "100%", justifyContent: "end" }}
              onClick={() => {
                navigation("/contact");
              }}
            >
              <Rubrik sx={{ color: "rgb(37,31,37)", fontSize: 20 }}>
                Kontakt
              </Rubrik>
              <ArrowForwardIcon sx={{ color: "rgb(37,31,37)", fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
