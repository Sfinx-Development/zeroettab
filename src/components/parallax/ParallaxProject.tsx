import { Box, Button, Typography } from "@mui/material";
import { useEffect,  } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isMobile } from "../CompanyForm";
import { Rubrik } from "../Footer";

export default function ParallaxProject() {
  const navigate = useNavigate();
  // const scrollRef = useRef<HTMLDivElement | null>(null); // Ref för skrollbehållaren
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const height = isMobile ? 0 : 50;
          const yOffset =
            element.getBoundingClientRect().top + window.scrollY - height;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
        } else {
          console.warn(`Elementet med id "${hash.slice(1)}" hittades inte.`);
        }
      }, 100);
    }
  }, [location]);

  // const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
  //   setIsDragging(true);

  //   const position =
  //     "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

  //   setStartX(position);
  //   setScrollLeft(scrollRef.current?.scrollLeft || 0);
  // };

  // const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
  //   if (!isDragging || !scrollRef.current) return;

  //   const position =
  //     "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

  //   const delta = startX - position;
  //   scrollRef.current.scrollLeft = scrollLeft + delta;
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  const projects = [
    {
      title: "Städtjejerna",
      url: "https://stadtjejerna.se",
      image: "https://i.imgur.com/TofNZWm.png",
      status: "Klar",
      // backgroundColor: "rgba(235,190,180,255)",
      type: "Hemsida",
      description:
        "Modern, feminin och något 90:tals inspirerad varm design för ett Boråsbaserat städföretag. Vi byggde en ny responsiv sida med fokus på kundkontakt och enkel bokning.",
    },
    {
      title: "Yaya Media",
      url: "https://yayamedia.se",
      image: "https://i.imgur.com/y0i4it9.png",
      status: "Klar",
      // backgroundColor: "rgba(254,232,209,255)",
      type: "Hemsida",
      description:
        "En webbplats för ett kreativt mediebolag, med fokus på storytelling, varumärkesstrategi och visuell identitet. Otroligt engagerade tjejer som tagit fram en fantastisk och unik design där vi fått äran att skräddarsy precis enligt deras önskemål",
    },
    {
      title: "DenThu Webshop",
      url: "https://denthuwebbshop.se",
      image: "https://i.imgur.com/enI1UZB.png",
      status: "Klar",
      // backgroundColor: "rgb(208,124,116)",
      type: "Webbshop",
      description:
        "Skräddarsydd e-handelslösning i React och Firebase för proffsprodukter inom bilskade-branchen. Med tanken att bra produkter ska vara tillgängligt för alla, hoppas vi att den blir en storsäljare på marknaden",
    },
    {
      title: "UF E-tjänst",
      url: "https://www.google.com/search?q=beezmart&rlz=1C1CHZL_svSE943SE943&oq=beezmart&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgkIARAAGA0YgAQyEQgCEC4YChgNGMcBGNEDGIAEMgkIAxAAGA0YgAQyCQgEEAAYDRiABDIJCAUQABgNGIAEMgkIBhAAGA0YgAQyCQgHEAAYDRiABDIJCAgQABgNGIAEMgkICRAAGA0YgATSAQg0NDMxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
      image: "https://i.imgur.com/upAsxi9.png",
      status: "Klar",
      // backgroundColor: "rgba(235,190,180,255)",
      type: "E-tjänst",
      description:
        "En digital e-tjänst fick vi äran att ta fram åt ett gäng unga entreprenörer på Sven Eriksonsgymnasiet — framtagen med fokus på enkelhet, tillgänglighet och innovation inom biodling och markägande. Ett mycket spännande projekt som inte längre är verksamt, men BeeZmart tog hem pris för sin ide och stolta är vi. Läs gärna om deras arbete!",
    },
    {
      title: "Primacura",
      url: "https://primacura.se/",
      image: "https://i.imgur.com/ziU9n6p.png",
      status: "Klar",
      // backgroundColor: "rgba(235,190,180,255)",
      type: "Webbplats",
      description:
        "En modern, varm och tillgänglig webbplats framtagen för Primacura — en verksamhet som arbetar med att skapa delaktighet, gemenskap och möjligheter för människor. Vi byggde en ny, responsiv sida med tydlig struktur, mjuka färger och fokus på användarvänlighet och inkludering.",
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
        id="slide"
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
              // ref={scrollRef}
              // onMouseDown={handleMouseDown}
              // onTouchStart={handleMouseDown}
              // onMouseMove={handleMouseMove}
              // onTouchMove={handleMouseMove}
              // onMouseUp={handleMouseUp}
              // onTouchEnd={handleMouseUp}
              // onMouseLeave={handleMouseUp}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                  xl: "1fr 1fr 1fr 1fr "
                },
                gap: { xs: 4, md: 4, xl: 5 },
                 
                width: "100%",

                justifyItems: "center",
                // width: "100%",
                //  margin: "2px",
                // flexDirection: { xs: "column", md: "row" },
                // overflowX: "auto", // ← CHANGED
                // gap: { xs: 4, xl: 10 },
                paddingTop: { xs: 4, md: 6 },
                 
                alignItems: { xs: "center" },
                // scrollSnapType: { xs: "none", md: "x mandatory" },
                
                // // paddingRight: { xs: 0, md: 8 },        // ← REMOVE
                // // scrollPaddingRight: { xs: 0, md: 20 }, // ← REMOVE
                // cursor: isDragging ? "grabbing" : "grab",
                // // Göm scrollbar
                // scrollbarWidth: "none", // Firefox
                // msOverflowStyle: "none", // IE/Edge
                // "&::-webkit-scrollbar": {
                //   // Chrome/Safari
                //   display: "none",
                // },
                // width: "100%",
                // margin: "auto",
                // flexDirection: { xs: "column", md: "row" },
                // overflowX: "scroll",
                // gap: { xs: 4, xl: 10 },
                // paddingTop: { xs: 4, md: 6 },
                // paddingLeft: { xs: 0, md: 4, xl: 6 },
                // alignItems: { xs: "center" },
                // scrollSnapType: { xs: "none", md: "x mandatory" },
                // display: "inline-flex",
                // paddingRight: { xs: 0, md: 8 },
                // scrollPaddingRight: { xs: 0, md: 20 },
                // cursor: isDragging ? "grabbing" : "grab",
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 3,
                    flexShrink: 0,
                    borderRadius: 2,
                    width: { xs: 280, md: 350, xl: 550 },
                    height: { xs: 300, md: 350, xl: 550 },
                    position: "relative", // ← NEW
                    overflow: "hidden", // ← NEW
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",

                    transition: "transform 0.3s ease-in-out",
                    // backgroundColor: project.backgroundColor ?? "rgba(250,220,197,255)", // optional fallback (kan lämnas bort)
                    // padding: 3,
                    "&:hover img": {
                      transform: "scale(1)", // 👈 zoomar ut bilden vid hover
                    },
                    "&:hover .overlay": {
                      opacity: 1, // 👈 gör overlayn synlig vid hover
                    },
                    // flexShrink: 0,
                    // borderRadius: 2,
                    // width: { xs: 280, md: 350, xl: 550 },
                    // height: { xs: 300, md: 350, xl: 550 },
                    // backgroundColor:
                    //   project.backgroundColor ?? "rgba(250,220,197,255)",
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "flex-start",
                    // justifyContent: "space-between",
                    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // ← FIXED
                      filter:
                        project.status === "Pågående" ? "blur(4px)" : "none",
                      transform: "scale(1)", // liten zoom för att undvika kanter vid blur
                      "&:hover": {
                        transform: "scale(1)", // 👈 zoomar ut så man ser hela bilden
                      },
                      // width: "100%",
                      // height: "auto",
                      // borderRadius: "8px",
                      // filter:
                      //   project.status == "Pågående" ? "blur(4px)" : "none",
                      // objectFit: "100%",
                    }}
                  />

                  {/* Overlay med text */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(14, 13, 14, 0.85)", // mörk semi-transparent bakgrund
                      color: "#F7F7F7",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      px: 3,
                      opacity: 0, // osynlig tills hover
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: 22, xl: 28 },
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, xl: 20 },
                        fontWeight: 300,
                        lineHeight: 1.4,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
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
                  <Typography
                    sx={{
                      fontSize: { xs: 16, xl: 23 },
                      paddingTop: 1,
                      color: "rgba(34,32,37,0.7)",
                      fontWeight: "light",
                      fontStyle:
                        project.status === "Pågående" ? "italic" : "normal",
                    }}
                  >
                    {project.status === "Pågående" ? "Pågående" : ""}
                  </Typography>
                  {project.status !== "Pågående" && (
                    <Button
                      aria-label={`Navigera till hemsidan för ${
                        project.title || "sidan"
                      }`}
                      onClick={() => {
                        if (project.url) {
                          window.open(project.url, "_blank");
                        } else {
                          navigate("/projects");
                        }
                      }}
                      sx={{
                       
                         mt: { xs: 29, md: 34, lg: 34, xl: 55 },
                        paddingX: 3,
                        paddingY: 1,
                        borderRadius: "10px",
                        backgroundColor: "#222025",
                        color: "#F7F7F7",
                        fontSize: { xs: 18, xl: 25 },
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
