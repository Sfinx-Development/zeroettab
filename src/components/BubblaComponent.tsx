import { Box, Typography } from "@mui/material";
import BackendBubbleSvg from "./BackendBubbleSvg";
import { Rubrik } from "./Footer";
import FrontendBubbleSvg from "./FrontendBubbleSvg";
import FullstackBubbleSvg from "./FullstackBubbleSvg";

export default function BubblaComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3, // Liten mellanrum mellan bubblor
      }}
    >
      {/* Frontend Bubbla */}
      <Box
        sx={{
          position: "relative",
          backgroundSize: "cover",
          width: "80%",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <FrontendBubbleSvg />
        <Rubrik
          variant="h4"
          sx={{
            color: "rgb(216,163,153)",
            marginBottom: 1,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Frontend
        </Rubrik>
        <Typography sx={{ color: "#5B5B5B", maxWidth: "25%", fontSize: 15 }}>
          Vi designar och bygger gränssnitt utifrån dina personliga önskemål
          samtidigt som vi säkerställer användarvänligheten.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          backgroundSize: "cover",
          width: "80%",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          textAlign: "center",
        }}
      >
        <BackendBubbleSvg />
        <Rubrik
          variant="h4"
          sx={{
            color: "#DBA569",
            marginBottom: 1,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Backend
        </Rubrik>
        <Typography sx={{ color: "#5B5B5B", maxWidth: "25%", fontSize: 15 }}>
          Vi utvecklar kraftfulla backend-lösningar, inklusive system och API:er
          som säkerställer att vår mjukvara fungerar smidigt och kan kommunicera
          med andra system.
        </Typography>
      </Box>

      {/* Fullstack Bubbla */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/path/to/fullstack-bubble.svg')", // Byt ut med rätt fil
          backgroundSize: "cover",
          width: "80%",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 4,
          textAlign: "center",
        }}
      >
        <FullstackBubbleSvg />
        <Rubrik
          sx={{
            color: "rgba(34,32,37,255)",
            marginBottom: 1,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Fullstack
        </Rubrik>
        <Typography sx={{ color: "#5B5B5B", maxWidth: "25%", fontSize: 15 }}>
          Vi bygger användargränssnitt utifrån dina personliga önskemål,
          samtidigt som vi säkerställer användarvänligheten.
        </Typography>
      </Box>
    </Box>
  );
}
