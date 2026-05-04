import { Box, Typography, Link } from "@mui/material";

import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
// import { Rubrik } from "../components/Footer";

type ContentBlock = {
  type: "text" | "heading";
  text: string;
};

type ServicePage = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  description: string;
  price: string;
  content?: ContentBlock[];
};


const servicePages: Record<string, ServicePage> = {
  hemsidor: {
    metaTitle: "Hemsidor i Borås | Moderna hemsidor för företag",
    metaDescription:
      "Vi bygger moderna, mobilanpassade och SEO-vänliga hemsidor för företag i Borås, Göteborg och Västra Götaland.",
    title: "Hemsidor för företag",
    description:
      "Vi bygger moderna, mobilanpassade och SEO-vänliga hemsidor för företag i Borås, Göteborg och Västra Götaland.",
    price: "Från 8000 kr",

    content: [
      {
        type: "text",
        text: "Letar du efter hjälp med en professionell hemsida i Borås? Vi bygger moderna, mobilanpassade och SEO-vänliga hemsidor för företag som vill synas bättre online och skapa ett starkare första intryck.",
      },
      {
        type: "text",
        text: "Vi utgår från Borås men hjälper även företag i Göteborg, Västra Götaland och resten av Sverige. Oavsett om du behöver en enkel företagshemsida, en sida med flera undersidor eller en digital informationssida skapar vi en lösning som passar ditt företag.",
      },
      {
        type: "text",
        text: "En bra hemsida ska inte bara se snygg ut. Den ska vara tydlig, snabb, enkel att använda och byggd så att Google kan förstå innehållet. Därför fokuserar vi på struktur, mobilanpassning, laddningstid och sökmotoroptimerade texter.",
      },

      {
        type: "heading",
        text: "Vad ingår i en hemsida?",
      },
      {
        type: "text",
        text: "Vi kan hjälpa dig med design, utveckling, mobilanpassning, kontaktformulär, undersidor, SEO-struktur, teknisk uppsättning och support efter lansering.",
      },

      {
        type: "heading",
        text: "Vem passar tjänsten för?",
      },
      {
        type: "text",
        text: "Tjänsten passar dig som startar ett nytt företag, vill modernisera en gammal hemsida eller behöver en mer professionell digital närvaro för att nå fler kunder.",
      },

      {
        type: "heading",
        text: "Vad kostar en hemsida?",
      },
      {
        type: "text",
        text: "Priset för en hemsida startar från 8000 kr. Månadskostnad för drift, support och vidare hantering startar från 350 kr/mån.",
      },

      {
        type: "heading",
        text: "Kontakta oss",
      },
      {
        type: "text",
        text: "Vill du veta vad en hemsida för ditt företag skulle kosta? Kontakta oss så går vi igenom dina behov och tar fram ett förslag.",
      },
    ],
    // content: [
    //   "En professionell hemsida är ofta det första intrycket en kund får av ditt företag.",
    //   "Vi skapar hemsidor som är tydliga, snabba och anpassade för både mobil, surfplatta och dator.",
    //   "Tjänsten passar dig som behöver en ny företagshemsida, vill modernisera en befintlig sida eller behöver en digital plats där kunder enkelt kan läsa om dina tjänster och kontakta dig.",
    // ],
  },
  webbshoppar: {
    metaTitle: "Webbshoppar | Webbshop för företag",
    metaDescription:
      "Vi bygger moderna webbshoppar med betalningslösningar, produktadministration och en smidig köpupplevelse.",

    title: "Webbshoppar",
    description:
      "Vi skapar webbshoppar med betalningslösningar, produktadministration och en smidig köpupplevelse.",
    price: "Från 40.000 kr",
  },
  mobilapplikationer: {
    metaTitle: "Mobilappar i Borås | Utveckling av appar för företag",
    metaDescription:
      "Vi utvecklar mobilapplikationer för företag i Borås, Göteborg och hela Sverige. Skräddarsydda appar med modern design och funktionalitet.",

    title: "Mobilapplikationer",
    description:
      "Vi utvecklar mobilappar anpassade efter dina idéer, funktioner och användarnas behov.",
    price: "Från 50.000 kr",
  },
  "e-tjanster": {
    metaTitle: "E-tjänster i Borås | Digitala tjänster för företag",
    metaDescription:
      "Vi utvecklar e-tjänster för företag i Borås, Göteborg och hela Sverige. Bokningar, kundportaler, formulär och digitala lösningar.",

    title: "E-tjänster",
    description:
      "Vi bygger digitala tjänster som bokningar, ansökningar, kundportaler och formulärlösningar.",
    price: "Från 50.000 kr",
  },
  "api-databaslosningar": {
    metaTitle: "API & databaslösningar | Integrationer för företag",
    metaDescription:
      "Vi hjälper företag med API-integrationer och databaslösningar. Koppla ihop system, hantera data och skapa skalbara lösningar.",

    title: "API och databaslösningar",
    description:
      "Vi hjälper företag med integrationer, databaser och API-lösningar som kopplar ihop olika system.",
    price: "Pris efter offertförfrågan",
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
   
  const navigate = useNavigate();

  const service = servicePages[slug as keyof typeof servicePages];

  if (!service) {
    return <Typography>Tjänsten hittades inte.</Typography>;
  }

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 10 }}>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>
      <Typography
        component="h1"
        sx={{ fontSize: { xs: 32, md: 48 }, mb: 2, fontWeight: 800 }}
      >
        {service.title}
      </Typography>

      <Typography component="p" sx={{ fontSize: 20, maxWidth: 800, mb: 4 }}>
        {service.description}
      </Typography>

      <Typography component="p" sx={{ fontSize: 26, mb: 2, fontWeight: 700 }}>
        {service.price}
      </Typography>

      {service.content?.map((block, index) => {
        if (block.type === "heading") {
          return (
            <Typography
              key={index}
              component="h2"
              sx={{ fontSize: 26, mt: 4, mb: 2, fontWeight: 700 }}
            >
              {block.text}
            </Typography>
          );
        }

        return (
          <Typography key={index} sx={{ maxWidth: 800, mb: 2 }}>
            {block.text}
          </Typography>
        );
      })}

      {/* {service.content?.map((text, index) => (
        <Typography key={index} sx={{ maxWidth: 800, mb: 2 }}>
          {text}
        </Typography>
      ))} */}

     <Link
  component="button"
  onClick={() => navigate("/contact#form")}
  aria-label="Kontaktformulär"
  sx={{
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    transition: "color 0.3s",
    background:
      "linear-gradient(to bottom, rgba(250,220,197,255), rgba(235,190,180,255))",
    paddingY: 1,
    paddingX: 2,
    marginTop: 1,
    borderRadius: 2,
    color: "rgb(37,31,37)",
    fontFamily: "Roboto",
    fontWeight: "semibold",
    fontSize: { xs: 20, md: 22, xl: 40 },
    lineHeight: 1.5,
    "&:hover": {
      color: "rgb(67, 61, 67)",
    },
  }}
>
  Kontakta oss
</Link>

      {/* <Button variant="contained" onClick={() => navigate("/contact#form")}>
        Kontakta oss
      </Button> */}
    </Box>
  );
}
