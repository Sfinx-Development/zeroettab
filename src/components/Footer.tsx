import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Divider, IconButton, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: 6,
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: 2,
        width: "100%",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              color: "#dbbed1",
              transition: "color 0.3s ease",
            },
          }}
          href="https://www.instagram.com/zeroettab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              color: "#dbbed1",
              transition: "color 0.3s ease",
            },
          }}
          href="https://www.facebook.com/zeroettab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              color: "#dbbed1",
              transition: "color 0.3s ease",
            },
          }}
          href="mailto:zeroettab@gmail.com"
        >
          <MailOutlineIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
      <Box sx={{ color: "white", marginBottom: 4 }}>
        <Typography fontWeight={600} variant="h6">
          Zeroett AB
        </Typography>
        <Typography>Vävlagargatan 6p</Typography>
        <Typography>507 30 Brämhult</Typography>
        <Typography sx={{ marginTop: 1 }}>
          <Link
            href="mailto:zeroettab@gmail.com"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            zeroettab@gmail.com
          </Link>
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "white", marginY: 4 }} />
      <Box sx={{ marginY: 4, color: "white" }}>
        <Link
          href="https://www.instagram.com/zeroettab"
          sx={{
            marginRight: 2,
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </Link>
        <Link
          href="https://www.facebook.com/zeroettab"
          sx={{
            marginRight: 2,
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          FACEBOOK
        </Link>
        <Link
          href="https://www.google.com/maps/dir//Vävlagargatan+6p,+507+30+Brämhult/"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          HITTA
        </Link>
      </Box>
    </Box>
  );
}
