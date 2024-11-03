import { Box } from "@mui/material";
import ProjectComponent from "../components/ProjectComponent";

// const projects = [
//   {
//     id: 1,
//     title: "stadtjejerna-title",
//     description: "stadtjejerna-desc",
//     imageUrl: "https://i.imgur.com/TofNZWm.png",
//     link: "https://stadtjejerna.se",
//   },
//   {
//     id: 2,
//     title: "example-title",
//     description: "example-desc",
//     imageUrl: "https://i.imgur.com/kKyCoTP.png",
//   },
//   {
//     id: 3,
//     title: "weather-title",
//     description: "weather-desc",
//     imageUrl: "https://i.imgur.com/kW51MSz.jpg",
//   },
//   {
//     id: 4,
//     title: "cy-title",
//     description: "cy-desc",
//     imageUrl: "https://i.imgur.com/PXofn2Z.png",
//   },
//   {
//     id: 5,
//     title: "greenify-title",
//     description: "greenify-desc",
//     imageUrl: "https://i.imgur.com/YZem2E2.png",
//   },
//   {
//     id: 6,
//     title: "webshop-title",
//     description: "webshop-desc",
//     imageUrl: "https://i.imgur.com/KSbsIhH.png",
//   },
//   {
//     id: 7,
//     title: "calendar-title",
//     description: "calendar-desc",
//     imageUrl: "https://i.imgur.com/ZKM8ghk.png",
//   },
// ];

export default function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
        minHeight: "100vh",
      }}
    >
      <ProjectComponent />
    </Box>
  );
}
