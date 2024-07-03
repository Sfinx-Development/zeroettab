import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { FaRegLightbulb } from "react-icons/fa";

interface TextInfoProps {
  title: string;
  text: string;
  icon?: React.ElementType;
}

const TextInfo = ({
  title,
  text,
  icon: Icon = FaRegLightbulb,
}: TextInfoProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "#7E57C2", // Lila bakgrundsfärg
        fontSize: "24px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        color: "white",
        textAlign: "center",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtil gradient över bakgrunden */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: 20, zIndex: 2 }}
      >
        {Icon && (
          <Icon size={60} style={{ marginBottom: 16, color: "#FFFFFF" }} />
        )}
      </motion.div>

      <Typography
        variant="h3"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          letterSpacing: 1,
          fontWeight: 600,
          fontSize: { xs: 32, md: 48 },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          zIndex: 2,
        }}
      >
        <FormattedMessage id={title} />
      </Typography>

      <Typography
        variant="body1"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        sx={{
          marginTop: 2,
          maxWidth: "80%",
          letterSpacing: 0.5,
          fontWeight: 300,
          fontSize: 18,
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
          zIndex: 2,
        }}
      >
        <FormattedMessage id={text} />
      </Typography>
    </Box>
  );
};

export default TextInfo;
