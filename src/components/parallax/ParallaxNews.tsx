import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Rubrik } from "../Footer";

export const news = [
  {
    title: "Fokus på SEO",
    date: "2026-06-09",
    text: "Snart lanserar vi en hemsida åt fastighetsföretag med fokus på SEO. Främst för att dyka upp på Google och lätt kunna tas kontakt med! Väldigt roligt att bygga ur det perspektivet först.",
    image: "https://i.imgur.com/5paiK87.png",
  },
  {
    title: "En ny partner inom en ny (för oss) bransch!",
    date: "2025-11-12",
    text: "Vi har fått ett ärofyllt uppdrag att skapa en webbshop åt ABC Collection. Det blir vår första kund inom textil-branschen.",
    image: "https://i.imgur.com/LfnRbPj.png",
  },
  {
    title: "Hemsida lanserad",
    date: "2025-10-20",
    text: "Med mycket värme och omtanke har vi skapat en ny sida åt assistansbolaget Primacura. Det har varit ett extra roligt projekt då vi jobbade nära kunden med mycket kommunikation. Skapad i react med typescript!",
    image: "https://i.imgur.com/pQYgvrg.png",
  },
  {
    title: "Nytt samarbete med assistans-bolag",
    date: "2025-06-01",
    text: "Vi bygger en ny hemsida åt ett företag som erbjuder personlig assistans och daglig verksamhet. Detta är extra roligt, inte bara för att vi bygger ett specialdesignat CMS men också för att det är till en så viktig del i samhället. Håll utkik!",
    image: "https://i.imgur.com/dM5n5Ch.png",
  },
  {
    title: "DenThu Webbshop är nu lanserad",
    date: "2025-03-23",
    text: "Vi har jobbat med DenThu Skadeverkstad under vintern. Efter regelbundna möten och nära kundkontakt har vi nu lanserat en användarvänlig webbshop. Frontend byggdes i React med TypeScript och backend (bl.a. SwedbankPay-integrationen) i .NET.",
    image: "https://i.imgur.com/7lISYb2.png",
  },
  {
    title: "E-tjänst till ett UF-företag",
    date: "2025-02-25",
    text: "UF-företaget BeeZmart har tagit fram en idé där biodlare och markägare kan komma i kontakt. Vi var glada att få bygga e-tjänsten åt dem där vi byggde skräddarsydda funktioner och villkor. Besök tjänsten på beezmartuf.se!",
    image: "https://i.imgur.com/IeVAAYT.png",
  },
  {
    title: "En unik hemsida åt Yaya Media",
    date: "2024-12-10",
    text: "Vi byggde en hemsida åt kommunikationsbyrån Yaya Media, helt utifrån deras färdiga design. Ett fantastiskt samarbete från start till mål! Kolla sidan på yayamedia.se.",
    image: "https://i.imgur.com/PU1tJBj.png",
  },
  {
    title: "Ny hemsida lanserad för Städtjejerna i 7Härad",
    date: "2024-06-13",
    text: "Vi har släppt en ny hemsida för Städtjejerna i 7Härad med fokus på tydlighet och SEO. Designen är skräddarsydd efter deras önskemål och de var med genom hela processen. Kika in på stadtjejerna.se!",
    image: "https://i.imgur.com/LE3UMfj.png",
  },
];

export default function NewsPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const softPink = "rgba(235,190,180,0.6)";
  //   const peach = "rgba(254,232,209,0.4)";

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        const height = isMobile ? 0 : 100;
        const yOffset =
          targetElement.getBoundingClientRect().top + window.scrollY - height;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
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
        id="list"
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(34,32,37,255)",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Rubrik
          sx={{
            color: "rgba(229,186,179,1)",
            fontSize: { xs: 25, md: 40, xl: 50 },
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          Vad händer på Zeroett?
        </Rubrik>
        {news.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection:
                index % 2 === 0
                  ? { xs: "column", md: "row" }
                  : { xs: "column", md: "row-reverse" },
              width: { xs: "90%", md: "80%" },
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: { xs: "100%", md: "50%" },
                height: isMobile ? 220 : 350,
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              }}
            />
            <Box
              sx={{
                flex: 1,
                padding: { xs: 3, md: 5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontSize: 14,
                  color: softPink,
                  mb: 1,
                }}
              >
                {new Date(item.date).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 22, md: 28 },
                  color: "#F7F7F7",
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: 16, md: 18 },
                  color: "rgba(247,247,247,0.9)",
                  lineHeight: 1.7,
                  maxWidth: "95%",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
