import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, styled, Typography } from "@mui/material";

export const Rubrik = styled(Typography)`
  font-family: "Rubrik", sans-serif;
  font-variation-settings: "wght" 500;
`;

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: 6,
        display: "flex",
        backgroundColor: "rgba(238,233,230,255)",
        zIndex: 2,
        width: "100%",
        justifyContent: { xs: "start", md: "center" },
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "80%" },
          marginX: { xs: 3, md: 0 },
          gap: { xs: 2, md: 0 },
          alignItems: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            textAlign: "left",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "65%" },
              height: "100%",
              color: "rgba(34,32,37,255)",
            }}
          >
            <Rubrik
              sx={{
                fontSize: { xs: 25, md: 30 },
                marginBottom: { xs: 1, md: 3 },
              }}
            >
              Våra tjänster
            </Rubrik>
            <Typography
              sx={{
                fontSize: 20,
                marginY: 0.5,
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              Hemsida
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                marginY: 0.5,
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              Webbshop
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                marginY: 0.5,
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              Mobilapplikation
            </Typography>

            <Typography
              sx={{
                fontSize: 20,
                marginY: 0.5,
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              API och databas
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            color: "rgba(34,32,37,255)",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "65%" }, height: "100%" }}>
            <Rubrik
              sx={{
                fontSize: { xs: 25, md: 30 },
                marginBottom: { xs: 1, md: 3 },
              }}
            >
              Besök oss
            </Rubrik>
            <Typography
              sx={{
                fontSize: 20,
                marginY: 0.5,
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              Vävlargatan 6p
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                marginY: 0.5,
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              507 30 Brämhult
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                marginTop: { xs: 2, md: 4 },
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              Eller virtuellt:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
              }}
            >
              <IconButton
                sx={{
                  color: "rgba(34,32,37,255)",
                  padding: 0,
                  marginRight: 0.5,
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
                  color: "rgba(34,32,37,255)",
                  padding: 0,
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
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            color: "rgba(34,32,37,255)",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "65%" }, height: "100%" }}>
            <Rubrik
              sx={{
                fontSize: { xs: 25, md: 30 },
                marginBottom: { xs: 1, md: 3 },
              }}
            >
              Kontakt
            </Rubrik>
            <Typography
              sx={{
                fontSize: 20,
                marginY: 0.5,
                fontFamily: "Roboto",
                fontWeight: "lighter",
              }}
            >
              zeroettab@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Box
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
      <Box
        sx={{
          marginY: 4,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          <Typography>INSTAGRAM</Typography>
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
          <Typography>FACEBOOK</Typography>
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
          <Typography> HITTA</Typography>
        </Link>
      </Box> */}
    </Box>
  );
}
