import { Box, Link, Typography } from "@mui/material";
import { news } from "./parallax/ParallaxNews";

export default function NewsPreview() {
  const first = news[0];

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        mb: { xs: 2, md: 4 },
        px: { xs: 2, md: 4 },
        py: 1,
        borderLeft: "3px solid rgba(235,190,180,0.6)",
        maxWidth: 600,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          color: "rgb(37,31,37)",
          fontSize: { xs: 14, md: 16 },
          mb: 0.5,
        }}
      >
        Senaste nytt
      </Typography>

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
        {first.title}
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
          href="/news"
          sx={{ textDecoration: "underline", ml: 0.5, fontSize: "inherit" }}
        >
          Läs mer
        </Link>
      </Typography>
    </Box>
  );
}
