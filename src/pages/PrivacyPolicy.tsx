import { Box, Typography } from "@mui/material";
import { Rubrik } from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Rubrik
        variant="h2"
        sx={{ marginBottom: "2rem", color: "rgb(37,31,37)" }}
      >
        Integritetspolicy för Zeroett AB
      </Rubrik>

      <Box
        sx={{
          padding: "2rem",
          maxWidth: "800px",
          width: "100%",
          color: "rgb(37,31,37)",
        }}
      >
        <Rubrik
          variant="h4"
          sx={{ marginBottom: "1rem", color: "rgb(37,31,37)" }}
        >
          1. Vilka uppgifter samlar vi in?
        </Rubrik>
        <Typography sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
          När du kontaktar oss via vårt kontaktformulär samlar vi in följande
          information:
        </Typography>
        <ul>
          <li>
            <Typography>Namn</Typography>
          </li>
          <li>
            <Typography>E-post</Typography>
          </li>
          <li>
            <Typography>Telefonnummer</Typography>
          </li>
        </ul>
        <Typography sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
          Dessa uppgifter skickas till vår e-postadress och lagras inte i någon
          databas.
        </Typography>
        <Rubrik
          variant="h4"
          sx={{ marginBottom: "1rem", color: "rgb(37,31,37)" }}
        >
          2. Varför samlar vi in dessa uppgifter?
        </Rubrik>
        <Typography sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
          Vi samlar in dina uppgifter för att kunna:
        </Typography>
        <ul>
          <li>
            <Typography>Svara på din förfrågan.</Typography>
          </li>
          <li>
            <Typography>
              Kontakta dig om ytterligare information krävs.
            </Typography>
          </li>
        </ul>
        <Rubrik
          variant="h4"
          sx={{ marginBottom: "1rem", color: "rgb(37,31,37)" }}
        >
          3. Hur hanterar vi dina uppgifter?
        </Rubrik>
        <Typography sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
          Dina uppgifter skickas via e-post och används endast för att hantera
          din förfrågan. Vi lagrar inte uppgifterna i någon databas.
          E-postmeddelandena raderas när de inte längre behövs.
        </Typography>
        <Rubrik
          variant="h4"
          sx={{ marginBottom: "1rem", color: "rgb(37,31,37)" }}
        >
          4. Dina rättigheter
        </Rubrik>
        <Typography sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
          Enligt GDPR har du rätt att:
        </Typography>
        <ul>
          <li>
            <Typography>
              Begära en kopia av de uppgifter vi har om dig.
            </Typography>
          </li>
          <li>
            <Typography>
              Begära att dina uppgifter rättas eller raderas.
            </Typography>
          </li>
          <li>
            <Typography>Invända mot hur vi hanterar dina uppgifter.</Typography>
          </li>
        </ul>
        <Typography sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
          För att utöva dina rättigheter, vänligen kontakta oss via e-post:{" "}
          <a href="zeroettab@gmail.com" style={{ color: "rgb(37,31,37)" }}>
            zeroettab@gmail.com
          </a>
          .
        </Typography>
        <Rubrik
          variant="h4"
          sx={{ marginBottom: "1rem", color: "rgb(37,31,37)" }}
        >
          5. Kontakt
        </Rubrik>
        <Typography sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
          Om du har frågor om vår integritetspolicy, vänligen kontakta oss:
        </Typography>
        <strong>
          <Typography>E-post:</Typography>
        </strong>{" "}
        <a href="mailto:zeroettab@gmail.com" style={{ color: "rgb(37,31,37)" }}>
          <Typography sx={{ marginBottom: 2 }}>zeroettab@gmail.com</Typography>
        </a>
        <Rubrik
          variant="h4"
          sx={{ marginBottom: "1rem", color: "rgb(37,31,37)" }}
        >
          6. Säkerhet
        </Rubrik>
        <Typography sx={{ lineHeight: "1.8" }}>
          Vi säkerställer att e-postkommunikation är säker genom att:
        </Typography>
        <ul>
          <li>
            <strong>
              <Typography>Använda HTTPS:</Typography>
            </strong>{" "}
            <Typography>
              Säkerställer att data som skickas via formuläret är krypterad.
            </Typography>
          </li>
          <li>
            <strong>
              <Typography>Begränsad åtkomst:</Typography>
            </strong>{" "}
            <Typography>
              Endast behörig personal har åtkomst till inkommande e-post.
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
