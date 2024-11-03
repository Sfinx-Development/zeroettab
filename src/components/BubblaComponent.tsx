import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BackendBubbleSvg from "./BackendBubbleSvg";
import { Rubrik } from "./Footer";
import FrontendBubbleSvg from "./FrontendBubbleSvg";
import FullstackBubbleSvg from "./FullstackBubbleSvg";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function BubblaComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: -8, // Negativt gap för att skapa överlapp mellan bubblor
      }}
    >
      {/* Frontend Bubbla */}
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "80%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2, // Minskat padding
            marginBottom: -10, // Negativ margin för att skapa överlapp nedåt
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
          <Typography sx={{ color: "#5B5B5B", maxWidth: "35%", fontSize: 14 }}>
            Vi designar och bygger gränssnitt utifrån dina personliga önskemål
            samtidigt som vi säkerställer användarvänligheten.
          </Typography>
        </Box>
      </motion.div>

      {/* Backend Bubbla */}
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "80%",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2, // Minskat padding
            marginBottom: -10, // Negativ margin för att skapa överlapp nedåt
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
          <Typography sx={{ color: "#5B5B5B", maxWidth: "30%", fontSize: 14 }}>
            Vi utvecklar kraftfulla backend-lösningar, inklusive system och
            API:er som säkerställer att vår mjukvara fungerar smidigt och kan
            kommunicera med andra system.
          </Typography>
        </Box>
      </motion.div>

      {/* Fullstack Bubbla */}
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "80%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 2, // Minskat padding
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
          <Typography sx={{ color: "#5B5B5B", maxWidth: "35%", fontSize: 14 }}>
            Vi bygger användargränssnitt utifrån dina personliga önskemål,
            samtidigt som vi säkerställer användarvänligheten.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
