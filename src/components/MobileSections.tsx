import { keyframes } from "@emotion/react";
import { Box, Link } from "@mui/material";
import { Rubrik } from "./Footer";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MobileSections = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2, // Mindre avstånd mellan sektionerna
      paddingY: 2,
    }}
  >
    {/* Section 1 */}
    <Box
      sx={{
        animation: `${slideIn} 0.8s ease-out`,
        textAlign: "center",
        fontSize: { xs: 18, md: 20 },
      }}
    >
      <Rubrik
        sx={{
          fontSize: 20,
          fontWeight: 500,
          marginBottom: 1,
          color: "rgb(37,31,37)",
        }}
      >
        Vi bygger hemsidor
      </Rubrik>
      <Link
        href="/offers#frontend"
        sx={{
          fontSize: 16,
          textDecoration: "none",
          color: "rgb(37,31,37)",
          "&:hover": {
            color: "rgb(67,61,67)",
          },
        }}
      >
        Läs mer →
      </Link>
    </Box>

    {/* Section 2 */}
    <Box
      sx={{
        animation: `${slideIn} 0.8s ease-out`,
        animationDelay: "0.2s",
        textAlign: "center",
        fontSize: { xs: 18, md: 20 },
      }}
    >
      <Rubrik
        sx={{
          fontSize: 20,
          fontWeight: 500,
          marginBottom: 1,
          color: "rgb(37,31,37)",
        }}
      >
        Vi bygger webbshoppar
      </Rubrik>
      <Link
        href="/offers#fullstack"
        sx={{
          fontSize: 16,
          textDecoration: "none",
          color: "rgb(37,31,37)",
          "&:hover": {
            color: "rgb(67,61,67)",
          },
        }}
      >
        Läs mer →
      </Link>
    </Box>

    {/* Section 3 */}
    <Box
      sx={{
        animation: `${slideIn} 0.8s ease-out`,
        animationDelay: "0.4s",
        textAlign: "center",
        fontSize: { xs: 18, md: 20 },
      }}
    >
      <Rubrik
        sx={{
          fontSize: 20,
          fontWeight: 500,
          marginBottom: 1,
          color: "rgb(37,31,37)",
        }}
      >
        Vi är experter på systemutveckling
      </Rubrik>
      <Link
        href="/offers"
        sx={{
          fontSize: 16,
          textDecoration: "none",
          color: "rgb(37,31,37)",
          "&:hover": {
            color: "rgb(67,61,67)",
          },
        }}
      >
        Läs mer →
      </Link>
    </Box>
  </Box>
);

export default MobileSections;
