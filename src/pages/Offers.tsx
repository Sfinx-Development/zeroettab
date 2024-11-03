import { Box, keyframes } from "@mui/material";
import { useIntl } from "react-intl";
import ServicesComponent from "../components/ServicesComponent";

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

interface Service {
  title: string;
  descriptionId: string; // Key for accessing localized description
  imgSrc: string;
  imgAlt: string;
}

const Offers = () => {
  const intl = useIntl();

  const services: Service[] = [
    {
      title: "offers-webpages",
      descriptionId: "webpages-description",
      imgSrc: "https://i.imgur.com/KSbsIhH.png",
      imgAlt: "Websites",
    },
    {
      title: "offers-mobile",
      descriptionId: "mobile-description",
      imgSrc: "https://i.imgur.com/CU0RgID.jpg",
      imgAlt: "Mobile Apps",
    },
    {
      title: "offers-backend",
      descriptionId: "backend-description",
      imgSrc: "https://i.imgur.com/yjzC7k6.png",
      imgAlt: "Backend",
    },
  ];

  const formatTextWithLineBreaks = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, index) => (
      <div key={index}>
        {line.trim()} <br />
      </div>
    ));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
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
      {/* {services.map((service, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: 2,
            padding: 4,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
            maxWidth: "80%",
            margin: "auto",
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: `${0.5 + index * 0.5}s`,
            animationFillMode: "forwards",
            opacity: 0,
            marginBottom: 4,
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
              <FormattedMessage id={service.title} />
            </Typography>
            <div
              style={{
                height: 2,
                width: 120,
                backgroundColor: "#896daf",
                marginBottom: 1,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1, padding: 2, textAlign: "center" }}>
              <img
                src={service.imgSrc}
                alt={service.imgAlt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  borderRadius: 8,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                padding: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body1"
                sx={{ marginTop: 2, lineHeight: 1.8, color: "white" }}
              >
                {formatTextWithLineBreaks(
                  intl.formatMessage({ id: service.descriptionId })
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))} */}
      <ServicesComponent />
    </Box>
  );
};

export default Offers;
