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
   backgroundColor: string;
  content?: ContentBlock[];
};


const servicePages: Record<string, ServicePage> = {
  hemsidor: {
    backgroundColor: "#F7F7F7",
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
   
     backgroundColor: "rgba(229,186,179,1)",
  metaTitle: "Webbshop i Borås | Professionella webbshoppar för företag",
  metaDescription:
    "Vi bygger moderna webbshoppar för företag i Borås, Göteborg och hela Sverige. Betalningslösningar, produktadministration och SEO-anpassade webbshoppar.",

  title: "Webbshoppar för företag",
  description:
    "Vi skapar moderna webbshoppar med betalningslösningar, produktadministration och en smidig köpupplevelse.",

  price: "Från 40.000 kr",

  content: [
    {
      type: "text",
      text: "Behöver du en professionell webbshop för att sälja produkter online? Vi bygger moderna och användarvänliga webbshoppar för företag som vill skapa en trygg och smidig köpupplevelse.",
    },
    {
      type: "text",
      text: "Vi hjälper företag i Borås, Göteborg och resten av Sverige med webbshoppar som fungerar lika bra på mobil som på dator.",
    },
    {
      type: "text",
      text: "En modern webbshop behöver vara snabb, tydlig och enkel att använda. Därför fokuserar vi på design, användarupplevelse, mobilanpassning och teknisk struktur som fungerar bra för både kunder och Google.",
    },
    {
      type: "heading",
      text: "Vad ingår i en webbshop?",
    },
    {
      type: "text",
      text: "Vi kan hjälpa dig med design, produktadministration, betalningsintegration, SEO-struktur, kundflöden, orderhantering och mobilanpassning.",
    },
    {
      type: "heading",
      text: "Vem passar tjänsten för?",
    },
    {
      type: "text",
      text: "Tjänsten passar företag som vill sälja produkter online och ha en professionell webbshop där kunder enkelt kan hitta produkter och genomföra köp.",
    },
    {
      type: "heading",
      text: "Vad kostar en webbshop?",
    },
    {
      type: "text",
      text: "Priset för en webbshop startar från 40.000 kr. Månadskostnad för drift, support och vidare hantering startar från 800 kr/mån.",
    },
    {
      type: "heading",
      text: "Kontakta oss",
    },
    {
      type: "text",
      text: "Vill du veta vad en webbshop för ditt företag skulle kosta? Kontakta oss så går vi igenom dina behov och tar fram ett förslag.",
    },
  ],
},
mobilapplikationer: {
  backgroundColor: "rgba(240,231,226,1)",

  metaTitle: "Mobilappar i Borås | Utveckling av appar för företag",

  metaDescription:
    "Vi utvecklar mobilapplikationer för företag i Borås, Göteborg och hela Sverige. Skräddarsydda appar med modern design och funktionalitet.",

  title: "Mobilapplikationer för företag",

  description:
    "Vi utvecklar moderna mobilappar anpassade efter dina idéer, funktioner och användarnas behov.",

  price: "Från 50.000 kr",

  content: [
    {
      type: "text",
      text: "Har du en idé för en mobilapp eller vill du göra din digitala tjänst tillgänglig direkt i mobilen? Vi utvecklar moderna mobilapplikationer för företag som vill skapa bättre användarupplevelser och smartare digitala lösningar.",
    },
    {
      type: "text",
      text: "Vi hjälper företag i Borås, Göteborg och resten av Sverige med mobilappar för både iPhone och Android.",
    },
    {
      type: "text",
      text: "En modern mobilapp behöver vara snabb, användarvänlig och byggd för att fungera stabilt på olika enheter. Därför fokuserar vi på design, prestanda, användarupplevelse och skalbara lösningar.",
    },

    {
      type: "heading",
      text: "Vad ingår i en mobilapplikation?",
    },
    {
      type: "text",
      text: "Vi kan hjälpa dig med design, apputveckling, användarflöden, API-integrationer, pushnotiser, databashantering och publicering till App Store och Google Play.",
    },

    {
      type: "heading",
      text: "Vem passar tjänsten för?",
    },
    {
      type: "text",
      text: "Tjänsten passar företag som vill utveckla en egen app för kunder, interna system, bokningar, medlemskap eller digitala tjänster.",
    },

    {
      type: "heading",
      text: "Vad kostar en mobilapp?",
    },
    {
      type: "text",
      text: "Priset för en mobilapplikation startar från 50.000 kr beroende på funktioner, design och integrationer.",
    },

    {
      type: "heading",
      text: "Kontakta oss",
    },
    {
      type: "text",
      text: "Vill du veta vad en mobilapp för ditt företag skulle kosta? Kontakta oss så går vi igenom dina behov och tar fram ett förslag.",
    },
  ],
  },
  
"e-tjanster": {
  backgroundColor: "#F7F7F7",

  metaTitle: "E-tjänster i Borås | Digitala tjänster för företag",

  metaDescription:
    "Vi utvecklar e-tjänster för företag i Borås, Göteborg och hela Sverige. Bokningar, kundportaler, formulär och digitala lösningar.",

  title: "E-tjänster för företag",

  description:
    "Vi bygger digitala tjänster som bokningar, ansökningar, kundportaler och formulärlösningar.",

  price: "Från 50.000 kr",

  content: [
    {
      type: "text",
      text: "Behöver ditt företag en digital tjänst där kunder eller användare kan boka tider, skicka in ansökningar eller hantera information online? Vi utvecklar moderna e-tjänster för företag och organisationer.",
    },
    {
      type: "text",
      text: "Vi hjälper företag i Borås, Göteborg och resten av Sverige med digitala lösningar som effektiviserar processer och förbättrar användarupplevelsen.",
    },
    {
      type: "text",
      text: "En modern e-tjänst behöver vara snabb, säker och enkel att använda. Därför fokuserar vi på användarvänlighet, prestanda och tekniska lösningar som fungerar stabilt över tid.",
    },

    {
      type: "heading",
      text: "Vad ingår i en e-tjänst?",
    },
    {
      type: "text",
      text: "Vi kan hjälpa dig med bokningssystem, formulärlösningar, kundportaler, användarhantering, API-integrationer, databaser och administrativa system.",
    },

    {
      type: "heading",
      text: "Vem passar tjänsten för?",
    },
    {
      type: "text",
      text: "Tjänsten passar företag och organisationer som vill digitalisera manuella processer och erbjuda kunder eller användare smartare digitala tjänster.",
    },

    {
      type: "heading",
      text: "Vad kostar en e-tjänst?",
    },
    {
      type: "text",
      text: "Priset för en e-tjänst startar från 50.000 kr beroende på funktioner, integrationer och omfattning.",
    },

    {
      type: "heading",
      text: "Kontakta oss",
    },
    {
      type: "text",
      text: "Vill du veta vad en e-tjänst för ditt företag skulle kosta? Kontakta oss så går vi igenom dina behov och tar fram ett förslag.",
    },
  ],
  },
"api-databaslosningar": {
  backgroundColor: "rgba(229,186,179,1)",

  metaTitle: "API & databaslösningar | Integrationer för företag",

  metaDescription:
    "Vi hjälper företag med API-integrationer och databaslösningar. Koppla ihop system, hantera data och skapa skalbara lösningar.",

  title: "API och databaslösningar",

  description:
    "Vi hjälper företag med integrationer, databaser och API-lösningar som kopplar ihop olika system.",

  price: "Pris efter offertförfrågan",

  content: [
    {
      type: "text",
      text: "Behöver ditt företag koppla ihop olika system eller hantera stora mängder data på ett effektivt sätt? Vi utvecklar API-lösningar och databassystem för moderna digitala tjänster.",
    },
    {
      type: "text",
      text: "Vi hjälper företag i Borås, Göteborg och resten av Sverige med integrationer mellan webbshoppar, affärssystem, betalningslösningar och externa tjänster.",
    },
    {
      type: "text",
      text: "En bra API- och databaslösning behöver vara säker, snabb och skalbar. Därför bygger vi lösningar med fokus på prestanda, stabilitet och framtida utvecklingsmöjligheter.",
    },

    {
      type: "heading",
      text: "Vad ingår i API- och databaslösningar?",
    },
    {
      type: "text",
      text: "Vi kan hjälpa dig med API-utveckling, systemintegrationer, databashantering, användarhantering, autentisering, serverlogik och teknisk struktur.",
    },

    {
      type: "heading",
      text: "Vem passar tjänsten för?",
    },
    {
      type: "text",
      text: "Tjänsten passar företag som behöver koppla ihop olika system, automatisera processer eller hantera större mängder data på ett effektivt sätt.",
    },

    {
      type: "heading",
      text: "Vad kostar API- och databaslösningar?",
    },
    {
      type: "text",
      text: "Priset varierar beroende på integrationer, system och omfattning. Kontakta oss för offert och genomgång av era behov.",
    },

    {
      type: "heading",
      text: "Kontakta oss",
    },
    {
      type: "text",
      text: "Vill du veta hur vi kan hjälpa ditt företag med API-utveckling eller databashantering? Kontakta oss så går vi igenom dina behov och tar fram ett förslag.",
    },
  ],
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
<Box
  sx={{
    width: "100%",
    minHeight: "100vh",
    backgroundColor: service.backgroundColor,
    display: "flex",
    justifyContent: "center",
    py: 10,
  }}
>
  <Box
    sx={{
      width: { xs: "90%", md: "80%", lg: "70%" },
    }}
  >
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
    </Box>
  );
}
