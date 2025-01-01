import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rubrik } from "../Footer";

type PricingOption = {
  title: string;
  subtitle?: string; // Valfri
  details?: string; // Valfri
};

export default function ParallaxServices() {
  const navigation = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);

  const services = [
    {
      id: "frontend",
      title: "Hemsidor",
      description:
        "Behöver du en ny hemsida för ditt företag? Eller varför inte en sida för eventet, Save the date eller 50-årsfesten?",
      features: [
        "Mobilresponsivt / enhetsanpassat",
        "SEO för tillgänglighet på webben",
        "Design och funktioner efter dina önskemål och behov",
        "Möjlighet till vidareutveckling av tjänst",
        "Möjlighet till statistik månadsvis",
        "Support",
      ],
      pricing: [
        {
          title: "Från 8000 kr",
          subtitle: "Månadskostnad från 350 kr/mån",
          details: "Hemsida med undersidor",
        },
        {
          title: "Från 500 kr",
          subtitle: "Informationssida utan vald domän.",
          details: "Digital inbjudan/informationssida",
        },
      ] as PricingOption[],
      backgroundColor: "#F7F7F7",
      priceColor: "rgba(235,190,180,255)",
    },
    {
      id: "webshop",
      title: "Webbshoppar",
      description:
        "Behöver du en webbshop med betalningsintegration och en admin-vy för att hantera varor och produktinformation?",
      features: [
        "Mobilresponsivt / enhetsanpassat",
        "Admin-login/vy för att hantera produkter",
        "Betalningsintegration",
        "SEO för tillgänglighet på webben",
        "Design och funktioner efter dina önskemål och behov",
        "Möjlighet till statistik månadsvis",
        "Support",
      ],
      pricing: [
        { title: "Från 30.000 kr", subtitle: "Månadskostnad från 800 kr/mån" },
      ] as PricingOption[],
      backgroundColor: "rgba(229,186,179,1)",
      priceColor: "rgb(37,31,37)",
    },
    {
      id: "mobileapp",
      title: "Mobilapplikationer",
      description:
        "Har du en ny idé för en mobilapp som du tänkt länge på? Eller kanske vill du ha din webbshop eller e-tjänst på mobilen?",
      features: [
        "Plattform-specifik utveckling",
        "Användarvänliga gränssnitt",
        "Design och funktioner efter dina önskemål och behov",
        "Integration med tredjepartstjänster",
        "Regelbundna uppdateringar och underhåll",
        "Support",
      ],
      pricing: [
        { title: "Från 50.000 kr", subtitle: "Månadskostnad från 500 kr/mån" },
      ] as PricingOption[],
      backgroundColor: "rgba(240,231,226,1)",
      priceColor: "rgb(37,31,37)",
    },
    {
      id: "etjanst",
      title: "E-tjänster",
      description:
        "Vill du erbjuda dina kunder en digital tjänst, som bokning av möten, registrering av intresseanmälningar, eller ansökningar online?",
      features: [
        "Byggd för skalbarhet och prestanda",
        "Design och funktioner efter dina önskemål och behov",
        "Integration med frontend och tredjepartstjänster",
        "Regelbunden övervakning och underhåll",
        "Anpassningsbara lösningar för specifika behov",
        "Support",
      ],
      pricing: [
        { title: "Från 50.000 kr", subtitle: "Månadskostnad från 800 kr/mån" },
      ] as PricingOption[],
      backgroundColor: "#F7F7F7",
      priceColor: "rgba(235,190,180,255)",
    },
    {
      id: "api",
      title: "API och databaslösningar",
      description:
        "Behöver du en lösning för att integrera din webbshop med ett externt lager- eller betalsystem? Eller hantera stora mängder kunddata på ett effektivt sätt?",
      features: [
        "Byggd för skalbarhet och prestanda",
        "Regelbunden övervakning och underhåll",
        "Anpassningsbara lösningar för specifika behov",
        "Support",
      ],
      pricing: [{ title: "Pris efter offertförfrågan" }] as PricingOption[],
      backgroundColor: "rgba(229,186,179,1)",
    },
  ];

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
          gap: 6,
          paddingBottom: 10,
        }}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: { xs: 2, md: 4 },
              width: { xs: "90%", sm: "70%", lg: "60%", xl: "50%" },
              backgroundColor: service.backgroundColor,
              borderRadius: 4,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              marginTop: { xs: 5, md: 10 },
            }}
            id={service.id}
          >
            <Rubrik
              sx={{
                color: "rgb(37,31,37)",
                fontSize: { xs: 24, md: 28 },
                fontWeight: 800,
                textAlign: "left",
                width: "100%",
              }}
            >
              {service.title}
            </Rubrik>
            <Typography
              sx={{
                color: "rgb(37,31,37)",
                fontSize: { xs: 16, md: 18 },
                fontWeight: 200,
                width: "100%",
                textAlign: "left",
                mt: 1,
              }}
            >
              {service.description}
            </Typography>
            <Box sx={{ width: "100%", mt: 1 }}>
              {service.features.map((feature, index) => (
                <Typography
                  component="li"
                  key={index}
                  sx={{
                    color: "rgb(37,31,37)",
                    fontSize: { xs: 14, md: 16 },
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: 8, mr: 1 }} />
                  {feature}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 2 },
                mt: 2,
              }}
            >
              {service.pricing.map((price, index) => (
                <Box key={index} sx={{ flex: 1, mr: index === 0 ? 2 : 0 }}>
                  <Rubrik sx={{ color: service.priceColor, fontSize: 20 }}>
                    {price.title}
                  </Rubrik>
                  {price.subtitle && (
                    <Rubrik sx={{ fontSize: 14 }}>{price.subtitle}</Rubrik>
                  )}
                  {price.details && (
                    <Typography sx={{ fontSize: 14, fontWeight: 200 }}>
                      {price.details}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
              }}
            >
              <IconButton
                aria-label="Navigera till Kontaktformuläret"
                onClick={() => navigation("/contact#form")}
              >
                <Rubrik sx={{ color: "rgb(37,31,37)", fontSize: 18 }}>
                  Kontakt
                </Rubrik>
                <ArrowForwardIcon
                  sx={{ color: "rgb(37,31,37)", fontSize: 20, ml: 1 }}
                />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
