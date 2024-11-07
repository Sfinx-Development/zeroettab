import { Box, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { Rubrik } from "../Footer";

emailjs.init("C8CxNnxZg6mg-d2tq");

export default function ParallaxProject() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Städtjejerna",
      url: "https://stadtjejerna.se",
      image: "https://i.imgur.com/TofNZWm.png",
      status: "Klar",
      backgroundColor: "rgba(235,190,180,255)",
      type: "Hemsida",
    },
    {
      title: "Yaya Media",
      image: "https://i.imgur.com/y0i4it9.png",
      status: "Pågående",
      backgroundColor: "rgba(254,232,209,255)",
      type: "Hemsida",
    },
    {
      title: "DenThu Webshop",
      image: "https://i.imgur.com/enI1UZB.png",
      status: "Pågående",

      backgroundColor: "rgb(208,124,116)",
      type: "Webbshop",
    },
    {
      title: "UF E-tjänst",
      image: "https://i.imgur.com/upAsxi9.png",

      status: "Pågående",

      backgroundColor: "rgba(235,190,180,255)",
      type: "E-tjänst",
    },
  ];

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
          paddingBottom: 10,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: { xs: 10, md: 16 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Rubrik
              sx={{
                color: "#F7F7F7",
                fontSize: 30,
                fontWeight: 500,
                textAlign: "left",
                width: "100%",
                paddingLeft: { xs: 4, md: 8 },
              }}
            >
              Stolta ögonblick
            </Rubrik>
            <Typography
              sx={{
                color: "rgba(247, 247, 247, 0.9)",
                fontSize: 18,
                fontFamily: "Roboto",
                fontWeight: 200,
                width: "100%",
                textAlign: "left",
                paddingLeft: { xs: 4, md: 8 },
              }}
            >
              Projekt
            </Typography>
            <Box
              sx={{
                width: "100%",
                margin: "auto",
                flexDirection: "row",
                overflowX: "scroll",
                gap: 4,
                paddingTop: { xs: 4, md: 6 },
                paddingLeft: { xs: 2, md: 4 },
                scrollSnapType: "x mandatory",
                display: "inline-flex",
                paddingRight: { xs: 4, md: 8 },
                scrollPaddingRight: 20,
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: 3,
                    flexShrink: 0,

                    borderRadius: 2,
                    minWidth: { xs: 300, md: 350 },
                    height: { xs: 300, md: 350 },
                    backgroundColor:
                      project.backgroundColor ?? "rgba(250,220,197,255)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    // scrollSnapAlign: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: "150px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                        filter:
                          project.status == "Pågående" ? "blur(4px)" : "none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: 22,
                        fontWeight: "bold",
                        color: "#222025",
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#222025",
                        fontSize: 18,
                        fontFamily: "Roboto",
                        fontWeight: 200,
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      {project.type}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 16,
                        paddingTop: 1,
                        color: "rgba(34,32,37,0.7)",
                        fontWeight: "light",
                        fontStyle:
                          project.status === "Pågående" ? "italic" : "normal",
                      }}
                    >
                      {project.status === "Pågående" ? "Pågående" : ""}
                    </Typography>
                  </Box>

                  {project.status !== "Pågående" && (
                    <Button
                      onClick={() => {
                        if (project.url) {
                          window.open(project.url, "_blank");
                        } else {
                          navigate("/projects");
                        }
                      }}
                      sx={{
                        mt: 2,
                        paddingX: 3,
                        paddingY: 1,
                        borderRadius: "20px",
                        backgroundColor: "#222025",
                        color: "#F7F7F7",
                        fontSize: 16,
                        fontWeight: "bold",
                        textTransform: "none",
                        alignSelf: "flex-start",
                        "&:hover": { backgroundColor: "#333333" },
                      }}
                    >
                      Besök
                    </Button>
                  )}
                </Box>
              ))}
              <Box sx={{ minWidth: "50px", flexShrink: 0 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
