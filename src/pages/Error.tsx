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
        backgroundColor: "white",
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
          justifyContent: "center",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginTop: isMobile ? "40px" : "20px",
            marginBottom: "20px",
          }}
        >
          Ojdå, här var det tomt.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#e3c5da",
            margin: isMobile ? "10px" : "10px 20px",
            paddingX: 3,
            paddingY: 1,
            backgroundColor: "#dbbed1",
            "&:hover": {
              borderColor: "#c499b6",
              backgroundColor: "#c499b6",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
            minWidth: isMobile ? "100%" : "auto",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Till startsidan
        </Button>
      </div>
    </Box>
  );
}
