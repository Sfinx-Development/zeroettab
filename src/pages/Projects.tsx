import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
  keyframes,
} from "@mui/material";
import { FormattedMessage } from "react-intl";

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const projects = [
  {
    id: 1,
    title: "stadtjejerna-title",
    description: "stadtjejerna-desc",
    imageUrl: "https://i.imgur.com/TofNZWm.png",
    link: "https://stadtjejerna.se",
  },
  {
    id: 2,
    title: "example-title",
    description: "example-desc",
    imageUrl: "https://i.imgur.com/kKyCoTP.png",
  },
  {
    id: 3,
    title: "weather-title",
    description: "weather-desc",
    imageUrl: "https://i.imgur.com/kW51MSz.jpg",
  },
  {
    id: 4,
    title: "cy-title",
    description: "cy-desc",
    imageUrl: "https://i.imgur.com/PXofn2Z.png",
  },
  {
    id: 5,
    title: "greenify-title",
    description: "greenify-desc",
    imageUrl: "https://i.imgur.com/YZem2E2.png",
  },
  {
    id: 6,
    title: "webshop-title",
    description: "webshop-desc",
    imageUrl: "https://i.imgur.com/KSbsIhH.png",
  },
  {
    id: 7,
    title: "calendar-title",
    description: "calendar-desc",
    imageUrl: "https://i.imgur.com/ZKM8ghk.png",
  },
];

export default function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingY: 4,
        margin: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginBottom: 2,
          marginLeft: { xs: 0, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            letterSpacing: 3,
            marginBottom: { xs: 2, md: 1 },
            fontWeight: "300",
            fontSize: { xs: 35, md: 50 },
            textAlign: { xs: "center", md: "start" },
          }}
        >
          <FormattedMessage id="featured-project" />
        </Typography>
        <div
          style={{
            height: 2,
            width: 200,
            backgroundColor: "#896daf",
            marginBottom: 1,
          }}
        />
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            key={project.id}
            xs={12}
            sm={6}
            md={4}
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: `${0.5 + index * 0.2}s`,
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "transparent",
                boxShadow: "none",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={project.title}
                height="200"
                image={project.imageUrl}
                sx={{
                  borderRadius: "4px 4px 0 0",
                  filter: "brightness(0.85)",
                }}
              />
              <CardContent
                sx={{
                  position: "relative",
                  backgroundColor: "transparent",
                  padding: 2,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", marginBottom: 1 }}
                >
                  {<FormattedMessage id={project.title} />}
                </Typography>
                <div
                  style={{
                    height: 2,
                    width: 50,
                    backgroundColor: "#896daf",
                    marginBottom: 8,
                  }}
                />
                <Typography variant="body2" color="white">
                  {<FormattedMessage id={project.description} />}
                </Typography>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      display: "block",
                      marginTop: 1,
                      // color: "#896daf",
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#896daf",
                      },
                    }}
                  >
                    <Typography>
                      <FormattedMessage id="visit-website" />
                    </Typography>
                  </Link>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
