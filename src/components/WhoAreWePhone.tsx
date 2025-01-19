import { keyframes } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

// Definiera keyframes för hopprörelsen
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(0deg); /* Mjukare hopp */
  }
`;

export default function WhoAreWePhone() {
  const isPhoneUnder800px = window.innerHeight < 800;
  const isPhoneUnder700px = window.innerHeight < 700;
  return (
    <Box
      sx={{
        paddingTop: { xs: 0 },
        display: "flex",
        justifyContent: "end", // Centrerar horisontellt
        alignItems: "center",
        width: "100%",
        minHeight: "100%",
        flexDirection: "column",
        marginBottom: isPhoneUnder800px ? -18 : -13,
      }}
    >
      <Box
        component="img"
        src="https://i.imgur.com/OqvOzUd.png"
        alt="Two girls coding"
        sx={{
          maxHeight: isPhoneUnder700px ? 200 : 300, // Justera höjden på bilden
          width: "auto",
          marginLeft: -0.5,
          display: "block",
          // marginLeft: 0.1,
          // marginLeft: 6,
        }}
      />
      <ExpandMoreIcon
        // component="img"
        // src="https://i.imgur.com/uu3B9aY.png"
        // alt="An arrow pointing down"
        sx={{
          height: 50,
          marginBottom: 10,
          width: 50,
          animation: `${bounce} 2s infinite ease-in-out`,
          transformOrigin: "center", // Säkerställer att rotation sker från mitten
        }}
      />
    </Box>
  );
}
