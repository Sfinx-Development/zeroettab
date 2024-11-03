import { Box } from "@mui/material";
import ServicesComponent from "../components/ServicesComponent";

// interface Service {
//   title: string;
//   descriptionId: string; // Key for accessing localized description
//   imgSrc: string;
//   imgAlt: string;
// }

const Offers = () => {
  // const intl = useIntl();

  // const services: Service[] = [
  //   {
  //     title: "offers-webpages",
  //     descriptionId: "webpages-description",
  //     imgSrc: "https://i.imgur.com/KSbsIhH.png",
  //     imgAlt: "Websites",
  //   },
  //   {
  //     title: "offers-mobile",
  //     descriptionId: "mobile-description",
  //     imgSrc: "https://i.imgur.com/CU0RgID.jpg",
  //     imgAlt: "Mobile Apps",
  //   },
  //   {
  //     title: "offers-backend",
  //     descriptionId: "backend-description",
  //     imgSrc: "https://i.imgur.com/yjzC7k6.png",
  //     imgAlt: "Backend",
  //   },
  // ];

  // const formatTextWithLineBreaks = (text: string) => {
  //   const lines = text.split("\n");
  //   return lines.map((line, index) => (
  //     <div key={index}>
  //       {line.trim()} <br />
  //     </div>
  //   ));
  // };

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
      <ServicesComponent />
    </Box>
  );
};

export default Offers;
