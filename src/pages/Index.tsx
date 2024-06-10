import CheckIcon from "@mui/icons-material/Check";
import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Typography } from "@mui/material";
export default function Index() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "transparent",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1 / 2,
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: 2,
          paddingLeft: 4,
          borderRadius: 8,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon sx={{ color: "white" }} />
          <Typography sx={{ color: "white", fontSize: 16 }}>
            zeroettab@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon sx={{ color: "white" }} />
          <Typography sx={{ color: "white", fontSize: 16 }}>
            0737000820/kkdkd
          </Typography>
        </Box>
        {/* Kontaktikon och text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Instagram sx={{ color: "white" }} />
          <Typography sx={{ color: "white", fontSize: 16 }}>
            Zeroett's instagram
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "end", marginY: 2 }}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 3,
              fontWeight: "500",
              fontSize: 40,
            }}
          >
            Web applications
          </Typography>
          <CheckIcon sx={{ color: "#c0c1e5", fontSize: 50, marginBottom: 1 }} />
        </Box>

        <Box sx={{ display: "flex", alignItems: "end", marginY: 2 }}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 3,
              fontWeight: "500",
              fontSize: 40,
            }}
          >
            Mobile applications
          </Typography>
          <CheckIcon sx={{ color: "#c0c1e5", fontSize: 50, marginBottom: 1 }} />
        </Box>

        <Box sx={{ display: "flex", alignItems: "end", marginY: 2 }}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 3,
              fontWeight: "500",
              fontSize: 40,
            }}
          >
            Backend solutions
          </Typography>
          <CheckIcon sx={{ color: "#c0c1e5", fontSize: 50, marginBottom: 1 }} />
        </Box>
      </Box>
    </Box>
  );
}
