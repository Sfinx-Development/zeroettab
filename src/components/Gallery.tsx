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
    { id: 4, url: "https://i.imgur.com/A0IOVjh.png", alt: "webpage" },
    { id: 5, url: "https://i.imgur.com/Q6nDVVa.png", alt: "webpage" },
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
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: 8,
        paddingY: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 10,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          color: "white",
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 30 }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {images.map((i) => (
          <Box
            key={i.id}
            sx={{
              display:
                imageInFocus === i.id ? "block" : { xs: "none", sm: "block" },
              height: imageInFocus === i.id ? 250 : 200,
              minWidth: imageInFocus === i.id ? 400 : 150,
              filter:
                imageInFocus === i.id ? "none" : "blur(2px) grayscale(80%)",
              transition: "all 0.5s ease",
              margin: "0 10px",
              borderRadius: 8,
              boxShadow:
                imageInFocus === i.id
                  ? "0px 4px 15px rgba(255, 255, 255, 0.5)"
                  : "none",
              transform: imageInFocus === i.id ? "scale(1.05)" : "scale(1)",
            }}
          >
            <img
              src={i.url}
              alt={i.alt}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
              }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 10,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          color: "white",
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
}
