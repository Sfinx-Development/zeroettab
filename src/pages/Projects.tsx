import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  keyframes,
} from "@mui/material";

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
    title: "Web site - Städtjejerna",
    description:
      "A website for a cleaning company with email services and customized design.",
    imageUrl: "https://i.imgur.com/TofNZWm.png",
  },
  {
    id: 2,
    title: "Web site - Example",
    description: "An example website for products and services.",
    imageUrl: "https://i.imgur.com/kKyCoTP.png",
  },
  {
    id: 3,
    title: "Mobile app - Weather",
    description: "A weather application - find the sun near you.",
    imageUrl: "https://i.imgur.com/kW51MSz.jpg",
  },
  {
    id: 4,
    title: "Web service - Virtual Workplace",
    description: "An online workplace and project manager for workplaces.",
    imageUrl: "https://i.imgur.com/PXofn2Z.png",
  },
];

export default function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
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
          //   backgroundColor: "red",
          width: "100%",
          marginBottom: 2,
          marginLeft: 10,
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
          Our Projects
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
                backgroundColor: "rgba(0,0,0, 0.7)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                borderRadius: 4,
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
                sx={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
