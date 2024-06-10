import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
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
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowX: "hidden",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          gutterBottom
          sx={{
            textAlign: "center",
            color: "white",
            position: "relative",
            marginTop: isMobile ? "40px" : "20px",
            marginBottom: "20px",
          }}
        >
          Wrong URL?
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "rgba(255,255,255,0.5)",
            margin: isMobile ? "10px" : "10px 20px",
            paddingX: 3,
            paddingY: 1,
            backgroundColor: "rgba(255,255,255,0.5)",
            "&:hover": {
              borderColor: "rgba(255,255,255,0.5)",
              backgroundColor: "rgba(255,255,255,0.3)",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
            width: "50%",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Go back
        </Button>
      </div>
    </Box>
  );
}
