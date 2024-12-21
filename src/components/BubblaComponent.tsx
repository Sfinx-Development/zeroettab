import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rubrik } from "./Footer";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function BubblaComponent() {
  const navigation = useNavigate();

  const sections = [
    {
      title: "Webbapplikationer",
      description:
        "Vi designar och bygger gränssnitt utifrån dina personliga önskemål samtidigt som vi säkerställer användarvänligheten.",
      color: "rgb(216,163,153)",
      link: "/offers#frontend",
      delay: 0.1,
    },
    {
      title: "Mobilapplikationer",
      description:
        "Vi designar och utvecklar användarvänliga och funktionella mobilapplikationer som passar dina behov.",
      color: "#DBA569",
      link: "/offers#mobile",
      delay: 0.2,
    },
    {
      title: "Backendlösningar",
      description:
        "Vi utvecklar robusta backend-lösningar och API:er för att optimera din webbplats eller applikations prestanda.",
      color: "rgb(216,163,153)",
      link: "/offers#backend",
      delay: 0.3,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        // background: "linear-gradient(120deg, #f3e8e2, #f9f4ef)",
        paddingY: 5,
      }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: section.delay }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 3,
              borderRadius: "50%",
              width: { xs: 220, md: 220 },
              height: { xs: 220, md: 220 },
              backgroundColor: section.color,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            <Rubrik
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: 18, md: 18 },
                marginBottom: 1,
              }}
            >
              {section.title}
            </Rubrik>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: 14, md: 14 },
                textAlign: "center",
              }}
            >
              {section.description}
            </Typography>
            <IconButton
              sx={{
                marginTop: 2,
                backgroundColor: "#fff",
                color: section.color,
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => navigation(section.link)}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}
