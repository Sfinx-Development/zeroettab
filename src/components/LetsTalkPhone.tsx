import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Link } from "@mui/material";

export default function LetsTalkPhone() {
  return (
    <Box
      sx={{
        width: "100%",
        paddingY: { xs: 2, md: 2 },
        textAlign: "center",
        // background: "linear-gradient(135deg,#2C1541 0%, #291040 100%)",
        // backgroundColor: "white",
        // en textändring
        alignItems: "center",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "center",
        }}
      >
        <Link
          href="mailto:zeroettab@gmail.com"
          sx={{ textDecoration: "none", color: "#662c9c" }}
        >
          <EmailIcon sx={{ fontSize: 30, color: "white" }} />
        </Link>
        <Link
          href="tel:0737000820"
          sx={{ textDecoration: "none", color: "white" }}
        >
          <PhoneIcon sx={{ fontSize: 30, color: "white" }} />
        </Link>

        <Link
          href="https://www.instagram.com/zeroettab"
          sx={{ textDecoration: "none", color: "white" }}
        >
          <Instagram sx={{ fontSize: 30, color: "white" }} />
        </Link>
      </Box>
    </Box>
  );
}
