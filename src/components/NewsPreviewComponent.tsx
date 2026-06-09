import { Box, Link, Typography } from "@mui/material";
import { Rubrik } from "./Footer";
import { news } from "./parallax/ParallaxNews";

export default function NewsPreview() {
  const first = news[0];

  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(235,190,180,0.3)",
        borderRadius: 2,
        maxWidth: 450,
      }}
    >
      <Rubrik
        variant="body2"
        sx={{
          fontWeight: 500,
          color: "rgb(37,31,37)",
          fontSize: { xs: 14, md: 16 },
          mb: 0.5,
        }}
      >
        Senaste från oss
      </Rubrik>

      <Link
        href={`/news#${first.date}`}
        underline="none"
        sx={{
          fontSize: { xs: 16, md: 18 },
          fontWeight: "bold",
          color: "rgb(37,31,37)",
          "&:hover": { color: "rgb(67, 61, 67)" },
          display: "inline-block",
        }}
      >
        <Rubrik> {first.title}</Rubrik>
      </Link>

      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: 13, md: 14 },
          color: "gray",
          mt: 0.5,
        }}
      >
        {first.date}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: 13, md: 14 },
          color: "rgb(67, 61, 67)",
          mt: 1,
        }}
      >
        {first.text.slice(0, 100)}...
        <Link
          href="/news#list"
          sx={{
            textDecoration: "underline",
            ml: 0.5,
            fontSize: "inherit",
            color: "rgba(52,48,56,1)",
          }}
        >
          Läs mer
        </Link>
      </Typography>
    </Box>
  );
}
