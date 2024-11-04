import { Box, Typography } from "@mui/material";
import { Rubrik } from "../Footer";

export default function ParallaxAboutUs() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(34,32,37,255)",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ position: "absolute", left: 0 }}>
          <img
            src="https://i.imgur.com/n6vt6Q8.png"
            alt="Pink decoration"
            height={"200px"}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 11,
          }}
        >
          <Rubrik
            sx={{
              color: "rgba(254,232,209,255)",
              fontSize: 35,
              fontWeight: 800,
            }}
          >
            Jämlikhet
          </Rubrik>
          <Rubrik
            sx={{
              color: "rgba(229,186,179,1)",
              fontSize: 35,
              fontWeight: 800,
            }}
          >
            Transparans
          </Rubrik>
          <Rubrik
            sx={{
              color: "rgba(254,232,209,255)",
              fontSize: 35,
              fontWeight: 800,
            }}
          >
            Kreativitet
          </Rubrik>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: { xs: 5, md: 10 },
            width: "100%",
          }}
        >
          <Rubrik
            sx={{
              color: "rgba(229,186,179,1)",
              fontSize: 25,
              fontWeight: 800,
              width: { xs: "80%", md: "100%" },
              display: "flex",
              alignItems: { xs: "left", md: "center" },
              justifyContent: { xs: "left", md: "center" },
            }}
          >
            Våra värdeord
          </Rubrik>
          <Typography
            sx={{
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: 18,
              fontFamily: "Roboto",
              fontWeight: 200,
              maxWidth: { xs: "80%", md: "60%" },
              textAlign: { xs: "left", md: "center" },
              marginTop: 1,
            }}
          >
            Vi vill arbeta för att öka representationen av kvinnor inom IT. Vi
            är öppna med hur vi ligger till gentemot våra kunder, genom hela
            processen och vill ha en trygg plats för kunder att berätta om sina
            idéer på. Vi är inte rädda för att gå utanför trygga ramar om det är
            enligt kundens behov. Tvärtom, det motiverar oss!
          </Typography>
        </Box>

        {/* Angelina och Elina sektionen */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            backgroundColor: "rgba(34,32,37,1)",
            position: "relative",
            zIndex: 3,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: { xs: 5, md: 10 },
            paddingTop: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "end" },
              alignItems: { xs: "center" },
              flex: 1,
              gap: { xs: 2, md: 4 },
              marginRight: { xs: 0, md: 4 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 150, md: 180 },
                height: { xs: 250, md: 280 },
                borderRadius: "10%",
                overflow: "hidden",
              }}
            >
              <img
                src="https://i.imgur.com/icqhCYg.jpeg"
                alt="Angelina"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  transform: "scale(2.0) translateY(15%) translateX(5%)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgba(229,186,179,0.8)",
                  textAlign: "left",
                  padding: "4px",
                }}
              >
                <Rubrik
                  sx={{ color: "rgba(34,32,37,255)", paddingY: 1, paddingX: 2 }}
                >
                  Angelina
                </Rubrik>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: { xs: 150, md: 180 },
                height: { xs: 250, md: 280 },
                borderRadius: "10%",
                overflow: "hidden",
              }}
            >
              <img
                src="https://i.imgur.com/dDhnWeN.jpeg"
                alt="Elina"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  transform: "scale(2.5) translateY(10%) translateX(5%)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgba(254,232,209,0.8)",
                  textAlign: "left",
                  padding: "4px",
                }}
              >
                <Rubrik
                  sx={{ color: "rgba(34,32,37,255)", paddingY: 1, paddingX: 2 }}
                >
                  Elina
                </Rubrik>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1, paddingTop: { xs: 4 }, paddingX: { xs: 3 } }}>
            <Rubrik
              sx={{
                color: "rgba(254,232,209,255)",
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              Vi är Zeroett
            </Rubrik>
            <Typography
              sx={{
                color: "rgba(247, 247, 247, 0.9)",
                fontSize: 18,
                fontFamily: "Roboto",
                fontWeight: 200,
                width: { xs: "80%", md: "60%" },
              }}
            >
              Angelina och Elina heter vi som driver Zeroett tillsammans. En
              utvecklarduo med säte i Borås. Angelina är duons härliga
              energiknippe. Ingen idé är för konstig. Elina, å andra sidan,
              duons lugn och vår stabila klippa. Att vi kompletterar varandra
              råder det inget tvivel om.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
