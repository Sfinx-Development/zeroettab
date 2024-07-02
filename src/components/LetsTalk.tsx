import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";

export default function LetsTalk() {
  return (
    <Box
      sx={{
        width: "100%",
        paddingY: { xs: 4, md: 2 },
        textAlign: "center",
        // background: "linear-gradient(135deg,#2C1541 0%, #291040 100%)",
        // backgroundColor: "white",
        alignItems: "center",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <Typography
        variant="h4"
        sx={{
          fontSize: { xs: 24, md: 36 },
          letterSpacing: 2,
          color: "black",
        }}
      >
        <FormattedMessage id="lets-talk" />
      </Typography> */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 1,
              borderRadius: 2,
              backgroundColor: "#2C1541",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <EmailIcon sx={{ fontSize: 40, color: "white" }} />
              <Link
                href="mailto:zeroettab@gmail.com"
                sx={{ textDecoration: "none", color: "#662c9c" }}
              >
                <Typography sx={{ fontSize: 20, color: "white" }}>
                  zeroettab@gmail.com
                </Typography>
              </Link>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Vill du prata mer? Kontakta oss via mail!
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 1,
              borderRadius: 2,
              backgroundColor: "#2C1541",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <PhoneIcon sx={{ fontSize: 40, color: "white" }} />
              <div style={{ display: "flex" }}>
                <Link
                  href="tel:0737000820"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  <Typography sx={{ fontSize: 20 }}>073-700 08 20</Typography>
                </Link>
                <Link
                  href="tel:0723372475"
                  sx={{ textDecoration: "none", color: "white", marginLeft: 1 }}
                >
                  <Typography sx={{ fontSize: 20 }}>/ 072-337 24 75</Typography>
                </Link>
              </div>

              <Typography sx={{ fontSize: 20, color: "white" }}>
                Eller ring oss.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 1,
              borderRadius: 2,
              backgroundColor: "#2C1541",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Instagram sx={{ fontSize: 40, color: "white" }} />
              <Link
                href="https://www.instagram.com/zeroettab"
                sx={{ textDecoration: "none", color: "white" }}
              >
                <Typography sx={{ fontSize: 20, color: "white" }}>
                  Zeroett's Instagram
                </Typography>
              </Link>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Kika gärna in på Zeroett's instagram!
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
