import { Box, Typography, keyframes } from "@mui/material";

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

export default function Offers() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      {[
        {
          title: "Hemsidor och Webbshoppar",
          description: `- Mobilresponsivt / enhetsanpassat
                        - SEO för att bli mer tillgänglig på webben
                        - Design och funktioner efter dina önskemål och behov
                        - 30 min gratis uppdatering i månaden
                        - Möjlighet till vidareutveckling av tjänst
                        - Möjlighet till statistik månadsvis
                        - Support - alltid tillgängliga på vår mail zeroettab@gmail.com`,
          imgSrc: "https://i.imgur.com/KSbsIhH.png",
          imgAlt: "Websites",
        },
        {
          title: "Mobilapplikationer",
          description: `- Plattform-specifik utveckling
                        - Användarvänliga gränssnitt
                        - Integration med tredjepartstjänster
                        - Regelbundna uppdateringar och underhåll
                        - Support - alltid tillgängliga på vår mail zeroettab@gmail.com`,
          imgSrc: "https://i.imgur.com/CU0RgID.jpg",
          imgAlt: "Mobile Apps",
        },
        {
          title: "Backend med API och databaslösningar",
          description: `- Byggd för skalbarhet och prestanda
                        - Integration med frontend och tredjepartstjänster
                        - Regelbunden övervakning och underhåll
                        - Anpassningsbara lösningar för specifika behov
                        - Support, alltid tillgängliga på vår mail`,
          imgSrc: "https://i.imgur.com/yjzC7k6.png",
          imgAlt: "Backend",
        },
      ].map((service, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: 8,
            padding: 4,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
            maxWidth: "80%",
            margin: "auto",
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: `${0.5 + index * 0.5}s`,
            animationFillMode: "forwards",
            opacity: 0,
            marginBottom: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              marginBottom: 2,
              marginLeft: { xs: 0, md: 10 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
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
              {service.title}
            </Typography>
            <div
              style={{
                height: 2,
                width: 120,
                backgroundColor: "#896daf",
                marginBottom: 1,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1, padding: 2, textAlign: "center" }}>
              <img
                src={service.imgSrc}
                alt={service.imgAlt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  borderRadius: 8,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                padding: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body1"
                sx={{ marginTop: 2, lineHeight: 1.8, color: "white" }}
              >
                {service.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
