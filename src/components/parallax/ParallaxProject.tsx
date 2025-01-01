import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rubrik } from "../Footer";

export default function ParallaxProject() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref för skrollbehållaren
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);

    const position =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

    setStartX(position);
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;

    const position =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

    const delta = startX - position;
    scrollRef.current.scrollLeft = scrollLeft + delta;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
      url: "https://yayamedia.se",
      image: "https://i.imgur.com/y0i4it9.png",
      status: "Klar",
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
                fontSize: { xs: 30, xl: 40 },
                fontWeight: 500,
                textAlign: "left",
                width: "100%",
                paddingLeft: { xs: 4, md: 8, xl: 10 },
              }}
            >
              Stolta ögonblick
            </Rubrik>
            <Typography
              sx={{
                color: "rgba(247, 247, 247, 0.9)",
                fontSize: { xs: 18, xl: 25 },
                fontFamily: "Roboto",
                fontWeight: 200,
                width: "100%",
                textAlign: "left",
                paddingLeft: { xs: 4, md: 8, xl: 10 },
              }}
            >
              Projekt
            </Typography>
            <Box
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchEnd={handleMouseUp}
              onMouseLeave={handleMouseUp}
              sx={{
                width: "100%",
                margin: "auto",
                flexDirection: { xs: "column", md: "row" },
                overflowX: "scroll",
                gap: { xs: 4, xl: 10 },
                paddingTop: { xs: 4, md: 6 },
                paddingLeft: { xs: 0, md: 4, xl: 6 },
                alignItems: { xs: "center" },
                scrollSnapType: { xs: "none", md: "x mandatory" },
                display: "inline-flex",
                paddingRight: { xs: 0, md: 8 },
                scrollPaddingRight: { xs: 0, md: 20 },
                cursor: isDragging ? "grabbing" : "grab",
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: 3,
                    flexShrink: 0,
                    borderRadius: 2,
                    width: { xs: 280, md: 350, xl: 500 },
                    height: { xs: 300, md: 350, xl: 500 },
                    backgroundColor:
                      project.backgroundColor ?? "rgba(250,220,197,255)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: 22, xl: 29 },
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
                      fontSize: { xs: 18, xl: 25 },
                      fontFamily: "Roboto",
                      fontWeight: 200,
                    }}
                  >
                    {project.type}
                  </Typography>
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
