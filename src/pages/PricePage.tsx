// import { Box, Typography, Link } from "@mui/material";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";


// export default function PricesPage() {
       
//       const navigate = useNavigate();
//   return (
//     <Box sx={{ px: { xs: 3, md: 10 }, py: 10 }}>
//       <Helmet>
//         <title>Vad kostar en hemsida? | Priser för webb & appar</title>
//         <meta
//           name="description"
//           content="Se priser för hemsidor, webbshoppar, appar och e-tjänster. Transparenta priser och lösningar för företag i Borås och Göteborg."
//         />
//       </Helmet>

//       <Typography
//         component="h1"
//         sx={{ fontSize: { xs: 32, md: 48 }, mb: 2, fontWeight: 800 }}
//       >
//         Vad kostar en hemsida och digitala tjänster?
//       </Typography>

//       <Typography sx={{ maxWidth: 800, mb: 4 }}>
//         Priset för en hemsida, webbshop eller app beror på omfattning,
//         funktioner och design. Här hittar du våra riktlinjer för priser.
//       </Typography>

//       {/* HEMSIDOR */}
//       <Typography component="h2" sx={{ fontSize: 26, mt: 4, mb: 2, fontWeight: 700 }}>
//         Vad kostar en hemsida?
//       </Typography>

//       <Typography sx={{ maxWidth: 800, mb: 2 }}>
//         En hemsida startar från 8000 kr. Då får du en modern,
//         mobilanpassad och professionell hemsida.
//       </Typography>

//       <Typography sx={{ maxWidth: 800, mb: 4 }}>
//         Månadskostnad från 350 kr/mån för drift, support och vidare utveckling.
//       </Typography>

//       {/* WEBSHOP */}
//       <Typography component="h2" sx={{ fontSize: 26, mt: 4, mb: 2, fontWeight: 700 }}>
//         Vad kostar en webbshop?
//       </Typography>

//       <Typography sx={{ maxWidth: 800, mb: 4 }}>
//         Webbshoppar startar från 40.000 kr. Detta inkluderar
//         produktadministration, betalningslösningar och en komplett lösning.
//       </Typography>

//       {/* APP */}
//       <Typography component="h2" sx={{ fontSize: 26, mt: 4, mb: 2, fontWeight: 700 }}>
//         Vad kostar en mobilapp?
//       </Typography>

//       <Typography sx={{ maxWidth: 800, mb: 4 }}>
//         Mobilappar startar från 50.000 kr beroende på funktionalitet,
//         design och integrationer.
//       </Typography>

//       {/* E-TJÄNSTER */}
//       <Typography component="h2" sx={{ fontSize: 26, mt: 4, mb: 2, fontWeight: 700 }}>
//         Vad kostar e-tjänster?
//       </Typography>

//       <Typography sx={{ maxWidth: 800, mb: 4 }}>
//         E-tjänster startar från 50.000 kr och kan inkludera bokningar,
//         kundportaler och formulärlösningar.
//       </Typography>

//       {/* CTA */}
//            <Link
//         component="button"
//         onClick={() => navigate("/contact#form")}
//         aria-label="Kontaktformulär"
//         sx={{
//           textDecoration: "none",
//           cursor: "pointer",
//           border: "none",
//           transition: "color 0.3s",
//           background:
//             "linear-gradient(to bottom, rgba(250,220,197,255), rgba(235,190,180,255))",
//           paddingY: 1,
//           paddingX: 2,
//           marginTop: 1,
//           borderRadius: 2,
//           color: "rgb(37,31,37)",
//           fontFamily: "Roboto",
//           fontWeight: "semibold",
//           fontSize: { xs: 20, md: 22, xl: 40 },
//           lineHeight: 1.5,
//           "&:hover": {
//             color: "rgb(67, 61, 67)",
//           },
//         }}
//       >
//         Få en offert
//       </Link>
      
//     </Box>
//   );
// }