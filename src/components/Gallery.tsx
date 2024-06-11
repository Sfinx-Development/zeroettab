import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";

interface Image {
  id: number;
  url: string;
  alt: string;
}

export default function Gallery() {
  const [imageInFocus, setImageInFocus] = useState<number>(3);

  const images: Image[] = [
    { id: 1, url: "https://i.imgur.com/U7CiaGM.png", alt: "webpage" },
    { id: 2, url: "https://i.imgur.com/Y0HEktb.png", alt: "webpage" },
    { id: 3, url: "https://i.imgur.com/kKyCoTP.png", alt: "webpage" },
    // { id: 4, url: "https://i.imgur.com/kW51MSz.jpg", alt: "webpage" },
    { id: 4, url: "https://i.imgur.com/A0IOVjh.png", alt: "webpage" },
  ];

  const handlePrev = () => {
    setImageInFocus((prev) => (prev > 1 ? prev - 1 : images.length));
  };

  const handleNext = () => {
    setImageInFocus((prev) => (prev < images.length ? prev + 1 : 1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        marginY: 4,
        minHeight: "250px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute", left: 10, zIndex: 1 }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((i) => (
          <img
            key={i.id}
            src={i.url}
            alt={i.alt}
            style={{
              height: imageInFocus === i.id ? 250 : 200,
              minWidth: imageInFocus === i.id ? "auto" : 150,
              filter: imageInFocus === i.id ? "none" : "blur(2px)",
              transition: "all 0.5s ease",
              margin: "0 10px",
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", right: 10, zIndex: 1 }}
      >
        <ArrowForwardIcon sx={{ fontSize: 40 }} />
      </IconButton>
    </Box>
  );
}
