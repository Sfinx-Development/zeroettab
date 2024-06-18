import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { useScreenSize } from "../contexts/screenSizeContext";

interface Image {
  id: number;
  url: string;
  alt: string;
}

const Gallery = () => {
  const [imageInFocus, setImageInFocus] = useState<number>(1);

  const images: Image[] = [
    { id: 1, url: "https://i.imgur.com/U7CiaGM.png", alt: "webpage" },
    { id: 2, url: "https://i.imgur.com/Y0HEktb.png", alt: "webpage" },
    { id: 3, url: "https://i.imgur.com/kKyCoTP.png", alt: "webpage" },
    { id: 4, url: "https://i.imgur.com/A0IOVjh.png", alt: "webpage" },
    { id: 5, url: "https://i.imgur.com/Q6nDVVa.png", alt: "webpage" },
  ];

  const handlePrev = () => {
    setImageInFocus((prev) => (prev > 1 ? prev - 1 : images.length));
  };

  const handleNext = () => {
    setImageInFocus((prev) => (prev < images.length ? prev + 1 : 1));
  };
  const { isMobile } = useScreenSize();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: 8,
        paddingY: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        marginBottom: 4,
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          alignSelf: "flex-start",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          color: "white",
          marginBottom: 2,
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 30 }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          width: "100%",
          height: isMobile ? "calc(100vh - 460px)" : "calc(100vh - 260px)",
          marginBottom: 2,
        }}
      >
        <Box
          key={images[imageInFocus - 1].id}
          sx={{
            flexShrink: 0,
            width: "100%",
            transition: "opacity 0.5s ease",
            borderRadius: 8,
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            margin: "0 10px",
          }}
        >
          <img
            src={images[imageInFocus - 1].url}
            alt={images[imageInFocus - 1].alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Box>
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{
          alignSelf: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          color: "white",
          marginTop: 2,
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
};

export default Gallery;
